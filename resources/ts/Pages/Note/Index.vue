<template>
    <div>
        <h1>Σημειώσεις</h1>
        <ul v-if="notes">
            <li v-for="note in notes" :key="note.id">
                <div class="h2">{{ note.title }}</div>
                <div>{{ note.content }}</div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    notes: Array<App.Models.Note>
}>();
</script>
