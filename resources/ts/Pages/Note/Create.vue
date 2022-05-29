<template>
    <div>

        <Head title="Δημιουργία νέας σημείωσης" />
        <div class="container">
            <div class="row justify-content-center my-5">
                <div class="col-sm-12 col-md-8 col-lg-5 my-4">
                    <div class="card">
                        <div class="card-header bg-warning">
                            <h1>Νέα σημείωση</h1>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="submit">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Τίτλος:</label>
                                    <input id="title" class="form-control" v-model="form.title" required />
                                </div>
                                <div class="mb-3">
                                    <label for="content" class="form-label">Περιεχόμενο:</label>
                                    <textarea id="content" class="form-control" v-model="form.content" required />
                                </div>
                                <div class="d-flex justify-content-between">
                                    <Link class="btn btn-danger" :href="route('note.index')" as="button">Άκυρο</Link>
                                    <button class="btn btn-primary" type="submit">Αποθήκευση</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Head, Link } from '@inertiajs/inertia-vue3';
import { useForm } from '@inertiajs/inertia-vue3';

const route = window.route;
let form = useForm({
    title: "",
    content: "",
})

function submit() {
    form.post(route('note.store'));
}
</script>
