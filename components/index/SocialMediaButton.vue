<script setup lang="ts">
defineProps<{ iconName: string, link: string }>()
</script>

<template>
    <a :href=link target="_blank" rel="noopener">
        <FontAwesomeIcon class="social-media-button FontAwesomeIcon" :icon="['fab', iconName.toLowerCase()]" />
    </a>
</template>

<style scoped>
.social-media-button {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 3em;
    display: flex;
}

.FontAwesomeIcon {
    color: var(--secondary-color);
}

.FontAwesomeIcon:hover {
    color: var(--action-color);
}


@media screen and (max-width: 690px) {
    .social-media-button {
        height: 3.6em;
    }
}
</style>