<template>
    <div>

        <Head :title="title" />

        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
                <Link href="/" class="text-decoration-none link-secondary h3">Σημειώσεις</Link>
                <div v-if="$page.props.canLogin" class="d-flex justify-content-end">
                    <div>
                        <Link v-if="$page.props.user" :href="route('dashboard')"
                            class="text-decoration-none text-muted">
                        Dashboard
                        </Link>

                        <template v-else>
                            <Link :href="route('login')" class="text-decoration-none text-muted">
                            Σύνδεση
                            </Link>

                            <Link v-if="$page.props.canRegister" :href="route('register')"
                                class="ms-4 text-decoration-none text-muted">
                            Εγγραφή
                            </Link>
                        </template>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/inertia-vue3';
const route = window.route;

const props = defineProps<{
    title: string,
}>();
</script>
