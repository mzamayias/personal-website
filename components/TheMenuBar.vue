<script setup lang="ts">
import RouteButton from "./RouteButton.vue";
</script>

<template>
    <div id="menu-bar">
        <div id="left-side">
            <RouteButton title="Home" path="/" />
        </div>
        <div id="right-side">
            <RouteButton title="Projects" path="/projects" />
            <RouteButton title="Uses" path="/uses" />
            <RouteButton title="About" path="/about" />
        </div>
    </div>
</template>

<style scoped>
#menu-bar {
    width: 100%;
}

#left-side {
    width: 66%;
}

#right-side {
    width: 33%;
}

#menu-bar,
#left-side,
#right-side {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>