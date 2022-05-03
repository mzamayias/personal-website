<script lang="ts">
</script>

<template>
    <div class="the-interesting-stuff">
        <h1 class="the-interesting-stuff-header">I think you will find interesting the following sections:</h1>
        <div class="the-interesting-stuff-buttons">
            <RouteButton title="Projects" path="/projects" />
            <RouteButton title="Uses" path="/uses" />
            <RouteButton title="About" path="/about" />
            <RouteButton title="Contact me" path="/contact" />
        </div>
    </div>
</template>

<style scoped>
.the-interesting-stuff,
.the-interesting-stuff-buttons,
h1 {
    margin: 0;
}

.the-interesting-stuff {
    display: grid;
    gap: 0.9em;
    grid-template-rows: auto;
    /* https://stackoverflow.com/a/55539473/13504709 */
    grid-template-rows: auto 1fr;
}

.the-interesting-stuff-buttons {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));

}

@media screen and (max-width: 690px) {
    .the-interesting-stuff-buttons {
        grid-template-columns: repeat(2, minmax(100px, auto));
    }
    .the-interesting-stuff {
        gap: 0.6em;
    }
}
</style>