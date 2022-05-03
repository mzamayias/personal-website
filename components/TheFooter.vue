<script lang="ts">
</script>

<template>
    <div class="the-footer">
        <!-- built with nuxt3 and typescript -->
        <p class="the-footer-text">
            Crafted with curiosity and attentiveness.
            <br>
            Built with
            <FooterLink url="https://v3.nuxtjs.org/" title="Nuxt3" color="var(--nuxt3-logo-color)" />
            and
            <FooterLink url="https://www.typescriptlang.org/" title="TypeScript" color="var(--typescript-logo-color)" />.
            <br>
            Mike Zamayias, {{ new Date().getFullYear() }}.
        </p>
    </div>
</template>

<style scoped>
</style>