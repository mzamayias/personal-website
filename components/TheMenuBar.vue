<script setup lang="ts">
import RouteButton from "./RouteButton.vue";
</script>

<template>
    <div class="menu-bar">
        <RouteButton title="Home" path="/" />
        <div class="right-side">
            <RouteButton title="Projects" path="/projects" />
            <RouteButton title="Uses" path="/uses" />
            <RouteButton title="About" path="/about" />
        </div>
    </div>
</template>

<style scoped>
.menu-bar,
.right-side,
h1 {
    margin: 0;
}

.menu-bar {
    display: grid;
    gap: 0.9em;
    grid-template-rows: auto;
    /* https://stackoverflow.com/a/55539473/13504709 */
    grid-template-rows: auto 1fr;
}

.right-side {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));

}

@media screen and (max-width: 690px) {
    .right-side {
        grid-template-columns: repeat(2, minmax(100px, auto));
    }

    .menu-bar {
        gap: 0.6em;
    }
}
</style>