<template lang="html">
    <section>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="#">
                    <img v-bind:src="logoSized" alt="" />
                </a>
                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            AAAA
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            BBBVbbbbbbbbb
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            AAAAssss
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="uk-cover-container">
             <canvas width="400" height="350"></canvas>
            <img :src="immagine_testata" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-default uk-position-center">
                <h1 class="uk-heading-primary">Top</h1>
            </div>
        </div>
        <nuxt/>

    </section>


</template>

<script>
function resize(image, option) {
  var imageService = '//img2.storyblok.com/'
  var path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}

export default {
    data: function () {
        return {
            logo: this.$store.getters.getLogoUrl,
            immagine_testata: this.$store.getters.immagineTestata
        }
    },
    computed: {
        // a computed getter
        logoSized: function () {
            return resize(this.logo, '170x0')
        }
    },

}
</script>

<style lang="scss">
</style>
