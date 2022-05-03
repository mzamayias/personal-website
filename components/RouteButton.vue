<script setup lang="ts">
import { useRoute } from "vue-router";
defineProps<{ title: string, path: string }>()
</script>

<template>
    <!-- <NuxtLink :to=path class="PrimaryButton TextButton"> -->
        <NuxtLink :to=path
            :class="path !== useRoute().fullPath ? 'PrimaryButton TextButton' : 'ActivePrimaryButton TextButton'">
            <p class="interest">
                {{ title }}
            </p>
        </NuxtLink>
</template>

<style scoped>
</style>