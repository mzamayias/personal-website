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
    margin: 0;
    max-width: 992px;
    width: 100%;
    display: grid;
    align-items: center;
    height: 100vh;
}
</style>