<template>
    <MainLayout title="Σημειώσεις">
        <div>
            <h1>Οι σημειώσεις μου
                <Link class="fs-6" :href="route('note.create')">[+] Νέα σημείωση</Link>
            </h1>
            <ul v-if="notes">
                <li v-for="note in notes" :key="note.id">
                    <div class="h2">{{ note.title }}
                        <Link class="fs-6" :href="route('note.edit', note)">Επεξεργασία</Link>
                        <Link class="fs-6 px-1" :href="route('note.destroy', note)" method="delete">Διαγραφή</Link>
                        <Link class="fs-6 px-1" :href="route('note.copy', note)" method="post">Αντιγραφή</Link>
                    </div>
                    <div>{{ note.content }}</div>
                </li>
            </ul>
        </div>
    </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from '@/Layouts/MainLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';
import route from 'ziggy-js';
const props = defineProps<{
    notes: Array<App.Models.Note>
}>();
</script>
