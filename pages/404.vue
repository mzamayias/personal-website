<template>
    <div id="page">
        <h1>404</h1>
        <p>Page not found</p>
        <!-- add a button to go the home page -->
        <nuxt-link to="/" class="PrimaryButton">
            <p class="interest">
                Return to Home
            </p>
        </nuxt-link>
    </div>
</template>

<style scoped>
#page {
    line-height: 1.5em;
    text-align: center;
    display: grid;
    place-items: center;
}

h1 {
    font-size: 9em;
}

p {
    font-size: 2em;
}

.interest{
    font-size: 1.5em;
}
</style>