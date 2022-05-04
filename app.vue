<template>
    <div id="container">
        <!-- v-if used below to hide the menu bar in the 404 page -->
        <!-- <TheMenuBar v-show="$router.getRoutes().map((route) => route.path).includes($route.fullPath)" /> -->
        <NuxtPage />
        <TheFooter />
    </div>
</template>

<style scoped>
#container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    align-items: center;
    height: 100vh;
    padding: 0 clamp(1rem, 1.5rem, 3rem);
    gap: 0;
}
</style>