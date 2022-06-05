<template>
    <div>

        <Head :title="title" />

        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">
                <Link href="/" class="text-decoration-none link-light h3">Σημειώσεις</Link>
                <div v-if="page_props.canLogin" class="d-flex justify-content-end">
                    <div>
                        <ul class="navbar-nav align-items-baseline">
                            <!-- Authentication Links -->
                            <jet-dropdown id="settingsDropdown">
                                <template #trigger>
                                    <img v-if="page_props.jetstream.managesProfilePhotos" class="rounded-circle"
                                        width="32" height="32" :src="page_props.user.profile_photo_url"
                                        :alt="page_props.user.name" />

                                    <span v-else>
                                        {{ page_props.user.name }}

                                        <svg class="ms-2" width="18" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </template>

                                <template #content>
                                    <!-- Account Management -->
                                    <h6 class="dropdown-header small text-muted">
                                        Διαχείριση Λογαριασμού
                                    </h6>

                                    <jet-dropdown-link :href="route('profile.show')">
                                        Προφίλ
                                    </jet-dropdown-link>

                                    <jet-dropdown-link :href="route('api-tokens.index')"
                                        v-if="page_props.jetstream.hasApiFeatures">
                                        API Tokens
                                    </jet-dropdown-link>

                                    <hr class="dropdown-divider">

                                    <!-- Authentication -->
                                    <form @submit.prevent="logout">
                                        <jet-dropdown-link as="button">
                                            Αποσύνδεση
                                        </jet-dropdown-link>
                                    </form>
                                </template>
                            </jet-dropdown>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container-fluid bg-warning">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/inertia-vue3'
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import { Inertia } from "@inertiajs/inertia";
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetDropdownLink from '@/Jetstream/DropdownLink.vue'
import route from 'ziggy-js';

const page_props = computed(() => usePage().props.value);

const props = defineProps<{
    title: string
}>();

function logout() {
    Inertia.post(route('logout'));
}

</script>
