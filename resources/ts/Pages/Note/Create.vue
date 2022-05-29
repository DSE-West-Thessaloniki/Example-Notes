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
                                    <input id="title" class="form-control" v-model="form.title" />
                                    <div v-if="form.errors.title" v-text="form.errors.title" class="text-danger fs-6">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="content" class="form-label">Περιεχόμενο:</label>
                                    <textarea id="content" class="form-control" v-model="form.content" />
                                    <div v-if="form.errors.content" v-text="form.errors.content"
                                        class="text-danger fs-6"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <Link class="btn btn-danger" :href="route('note.index')" as="button"
                                        :disabled="form.processing">Άκυρο</Link>
                                    <button class="btn btn-primary" type="submit"
                                        :disabled="form.processing">Αποθήκευση</button>
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
import route from 'ziggy-js';

let form = useForm({
    title: "",
    content: "",
})

function submit() {
    form.post(route('note.store'));
}
</script>
