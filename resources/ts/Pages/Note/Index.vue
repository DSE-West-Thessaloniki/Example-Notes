<template>
    <div>
        <h1>Σημειώσεις
            <Link class="fs-6" :href="route('note.create')">[+] Νέα σημείωση</Link>
        </h1>
        <ul v-if="notes">
            <li v-for="note in notes" :key="note.id">
                <div class="h2">{{ note.title }}</div>
                <div>{{ note.content }}</div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3';
const route = window.route;
const props = defineProps<{
    notes: Array<App.Models.Note>
}>();
</script>
