<template lang="html">

    <div class="uk-cover-container">
        <canvas width="500" height="500"></canvas>
        <img :src="imageResize(immagine_testata, '2000x500')" alt="" uk-cover>
        <div class="uk-overlay uk-overlay-default uk-position-center uk-text-center">
            <h1 class="uk-heading-primary  uk-text-center"><span class="uk-text-bold text-rosso">GRAZIE</span> per averci contattati!</h1>
            <h2 class="uk-h2 uk-text-center">Ti risponderemo il prima possibile</h2>
            <p>
                <a href="/">Torna alla Home </a>
            </p>
        </div>
    </div>


</template>

<script>
import {resize} from '~/tools/manageImages.js'

export default {
    data: function () {
        return {
            immagine_testata: this.$store.getters.immagineTestata,
            imageResize: resize
        }
    }


}

</script>

<style lang="scss">
.grazieNewsletter {
    padding: 4rem;

    a {
        font-size: 220%;
    }
}
</style>
