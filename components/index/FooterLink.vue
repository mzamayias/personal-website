<script setup lang="ts">
// ask for url link, title and color
defineProps<{ url: string, title: string, color: string }>()
</script>

<template>
    <a :href=url target="_blank" rel="noopener" :style="{ color: color }">
        {{ title }}
    </a>
</template>

