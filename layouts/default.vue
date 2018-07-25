<template lang="html">
    <section>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-text-bold" href="#">
                    <!-- <img v-bind:src="logoSized" alt="" /> -->
                    Dolcenascita.it
                </a>
                <ul class="uk-navbar-nav">
                    <!-- <li>
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
                    </li> -->
                </ul>
            </div>
        </nav>

        <nuxt/>

    </section>


</template>

<script>
import {resize} from '~/tools/manageImages.js'

export default {
    data: function () {
        return {
            logo: this.$store.getters.getLogoUrl,
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
