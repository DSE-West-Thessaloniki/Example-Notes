<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Models\Note;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Note::class, 'note');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $filter = Request::input('filter');
        if (!is_string($filter)) {
            $filter = '';
        }

        $notes = Note::where('user_id', auth()->user()->id)
            ->when($filter, function($query) use ($filter) {
                $query->where(function($query) use ($filter) {
                    $query->where('title', 'like', "%{$filter}%")
                        ->orWhere('content', 'like', "%{$filter}%");
                });
            })->paginate(10);

        if ($filter) {
            $notes->appends(['filter' => $filter]);
        }

        return Inertia::render('Note/Index', [
            'notes' => $notes,
            'filters' => ['filter' => $filter],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Note/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreNoteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNoteRequest $request)
    {
        Note::create($request->safe()
            ->merge(['user_id' => auth()->user()->id])
            ->only('user_id', 'title', 'content'));

        return redirect(route('note.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        return Inertia::render('Note/Edit', [
            "note" => $note
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateNoteRequest  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        $note->fill($request->validated());
        $note->save();

        return redirect(route('note.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        $note->delete();

        return redirect(route('note.index'));
    }

    public function copy(Note $note)
    {
        $this->authorize('view', $note);
        $this->authorize('create', Note::class);

        $new_note = $note->replicate();
        $new_note->title = $note->title . ' - Αντίγραφο';
        $new_note->save();

        return redirect(route('note.index'));
    }
}
