<template>
    <MainLayout title="Σημειώσεις">
        <div>
            <div class="d-flex justify-content-between">
                <h1>Οι σημειώσεις μου
                    <Link class="fs-6" :href="route('note.create')">[+] Νέα σημείωση</Link>
                </h1>
                <input type="text" name="filter" v-model="filter" class="col-sm-3" placeholder="Αναζήτηση..." />
            </div>
            <ul v-if="notes">
                <li v-for="note in notes.data" :key="note.id">
                    <div class="h2">{{ note.title }}
                        <Link class="fs-6" :href="route('note.edit', note)">Επεξεργασία</Link>
                        <Link class="fs-6 px-1" :href="route('note.destroy', note)" method="delete">Διαγραφή</Link>
                        <Link class="fs-6 px-1" :href="route('note.copy', note)" method="post">Αντιγραφή</Link>
                    </div>
                    <div>{{ note.content }}</div>
                </li>
            </ul>
            <nav v-if="notes.next_page_url !== notes.prev_page_url">
                <ul class="pagination">
                    <li v-for="link in notes.links" :class="pageItemClass(link)">
                        <Link class="page-link" :href="link.url" v-html="link.label">
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from '@/Layouts/MainLayout.vue';
import { InertiaLink, Link } from '@inertiajs/inertia-vue3';
import route from 'ziggy-js';
import { ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import throttle from 'lodash/throttle';

const props = defineProps<{
    notes: { data: Array<App.Models.Note>, links: Array<InertiaLink>, next_page_url: string, prev_page_url: string },
    filters: { "filter": string }
}>();

let filter = ref(props.filters.filter);

watch(filter, throttle(value => {
    Inertia.get(route('note.index'), { filter: value }, {
        preserveState: true,
        replace: true
    })
}, 500));

function pageItemClass(item: InertiaLink) {
    if (item.url) {
        if (item.active) {
            return "page-item active";
        }

        return "page-item";
    }

    return "page-item disabled";
}
</script>
