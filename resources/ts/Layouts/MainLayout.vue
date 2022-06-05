<template>
    <div>

        <Head :title="title" />

        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">
                <Link href="/" class="text-decoration-none link-light h3">Σημειώσεις</Link>
                <div v-if="$page.props.canLogin" class="d-flex justify-content-end">
                    <div>
                        <Link :href="route('logout')" method="post" class="text-decoration-none link-light">
                        Αποσύνδεση
                        </Link>
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
import route from 'ziggy-js';

const props = defineProps<{
    title: string
}>();

</script>
