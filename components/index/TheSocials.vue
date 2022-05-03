<script lang="ts">
</script>

<template>
    <div class="social-media">
        <h1 class="social-media-header"> Let's connect:</h1>
        <div class="social-media-buttons">
            <SocialMediaButton iconName="github" link='https://github.com/mzamayias' />
            <SocialMediaButton iconName="twitter" link='https://twitter.com/mzamayias' />
            <SocialMediaButton iconName="instagram" link='https://instagram.com/mzamayias' />
            <SocialMediaButton iconName="linkedin" link='https://linkedin.com/in/mzamayias' />
        </div>
    </div>
</template>

<style scoped>
.social-media,
.social-media-header,
h1 {
    margin: 0;
}

.social-media {
    display: grid;
    grid-template-rows: auto;
    gap: 1.5rem;
    /* https://stackoverflow.com/a/55539473/13504709 */
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: center;
}

.social-media-buttons {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 690px) {

    .social-media-header,
    .social-media-buttons {
        grid-column: span 2/auto;
    }

    .social-media {
        gap: 0.6em;
    }
}
</style>