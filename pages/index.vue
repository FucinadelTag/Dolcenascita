<template>
    <section class="home">
        <div class="uk-cover-container">
            <canvas width="500" height="500"></canvas>
            <img :src="imageResize(immagine_testata, '1500x500')" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-default uk-position-center">
                <h2 class="uk-h2 uk-text-center">Stai per diventare mamma o lo sei appena diventata?</h2>
                <h1 class="uk-heading-primary  uk-text-center">Una <span class="uk-text-bold text-rosso">Doula</span> può aiutarti</h1>
            </div>
        </div>
        <div class="uk-section uk-section-default uk-padding">
            <div class="uk-container">
                <hr>
                <div class="uk-grid uk-grid-match uk-child-width-expand@s uk-grid-divider" uk-grid>
                    <div>
                        <h2 class="uk-h3 uk-text-bold">Prima del PARTO</h2>
                        <img class="" :data-src="imageResize('/f/46475/1600x1027/8994c5caf0/prima-del-parto.jpg', '340x0')" alt="Doula" uk-img/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                        <dl class="uk-description-list">
                            <dt>Consigli pratici</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                        <dl class="uk-description-list">
                            <dt>Ascolto e vicinanza</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                        <dl class="uk-description-list">
                            <dt>Preparazione al parto</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                    </div>
                    <div>
                        <h2 class="uk-h3 uk-text-bold">Durante il PARTO</h2>
                        <img class="" :data-src="imageResize('/f/46475/2121x1414/48e3e9d795/durante-in-parto.jpg', '340x0')" alt="Doula" uk-img/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                        <dl class="uk-description-list">
                            <dt>Ti accompagna</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                        <dl class="uk-description-list">
                            <dt>Sta viciono al tuo compagno</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                        <dl class="uk-description-list">
                            <dt>Ti da una mano</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                    </div>
                    <div>
                        <h2 class="uk-h3 uk-text-bold">Dopo il PARTO</h2>
                        <img class="" :data-src="imageResize('/f/46475/1688x1125/114ae32fce/dopo-il-parto1.jpg', '340x0')" alt="Doula" uk-img/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                        <dl class="uk-description-list">
                            <dt>Allattamento al seno</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                        <dl class="uk-description-list">
                            <dt>Aiuto nei primi mesi</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                        <dl class="uk-description-list">
                            <dt>Ascolto e vicinanza</dt>
                            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <callToAction/>

        <div class="uk-section uk-section-muted uk-padding">
            <div class="uk-container">
                <h2 class="uk-h2 uk-text-bold">Chi è una Doula?</h2>
                <hr>
                    <div class="uk-grid uk-grid-small uk-child-width-expand@s" uk-grid>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>


                        </div>
                        <div>
                            <img class="" :data-src="imageResize('/f/46475/848x565/34b0af0548/prima-del-parto1.jpg', '600x0')" alt="Doula" uk-img />
                        </div>
                    </div>
            </div>
        </div>

        <callToAction/>

        <div class="uk-section uk-section-muted uk-padding">
            <div class="uk-container">
                <h2 class="uk-h2 uk-text-bold">Come funziona il vostro servizio?</h2>
                <hr>
                    <div class="uk-grid uk-grid-small uk-child-width-1-3@m uk-grid-divider" uk-grid>
                        <div>
                            <h3 class="uk-h3 uk-text-bold"><span uk-icon="phone"></span> Chiamaci o scrivici</h3>

                            <p>
                                Chiama il numero verde <span class="uk-dark"><a href="tel:80080008000">800 800 800</a></span> oppure <a href="#form">scrivici</a>. Senza alcun impegno potrai parlare con una Doula trovando una risposta a tutte le tue domande.
                            </p>

                        </div>
                        <div>
                            <h3 class="uk-h3 uk-text-bold"><span uk-icon="users"></span> Conosci una Doula</h3>

                            <p>
                                Sulla base delle tue esigenze ti consigleremo una Doula che potrai contattare e conoscere personalmente senza alcun impegno.
                            </p>

                        </div>
                        <div>
                            <h3 class="uk-h3 uk-text-bold"><span uk-icon="heart"></span> Incomincia il tuo percorso</h3>

                            <p>
                                Se lo riterrai opportuno potrai incomciniare il tuo percorso con la Doula acqustando un pacchetto da 10, 20 o 30 ore.
                            </p>

                        </div>
                    </div>

            </div>
        </div>

        <div class="uk-section uk-section-primary uk-padding">
            <div class="uk-container">
                <div class="uk-grid uk-grid-small uk-child-width-1-2@m uk-grid-divider" uk-grid>
                    <div>
                        <h3 id="form" class="uk-h3 uk-text-bold"><span uk-icon="mail"></span> Invia un messaggio</h3>

                        <form>
                            <fieldset class="uk-fieldset">
                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Email</label>
                                    <input class="uk-input" type="text" placeholder="Inserisci il tuo indirizzo email" required>
                                </div>



                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Messaggio</label>
                                    <textarea class="uk-textarea" rows="5" placeholder="Raccontaci qualcosa di te e di cosa hai bisogno"></textarea>
                                </div>


                            </fieldset>
                        </form>

                    </div>
                    <div>
                        <h3 class="uk-h3 uk-text-bold"><span uk-icon="receiver"></span> Chiama il Numero Verde</h3>

                            <a href="tel:80080008000" class="uk-link-heading">
                                <span class="uk-h1 text-verde uk-margin-left">
                                    800 800 800
                                </span>

                            </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                    </div>
                </div>
            </div>
        </div>

        <div class="uk-cover-container uk-height-max-medium">
            <img :data-src="imageResize(immagine_testata, '1500x500')" alt="" uk-img>
        </div>
        <div class="uk-section uk-section-muted uk-padding">
            <div class="uk-container">
                <div class="uk-grid uk-grid-small uk-child-width-1-3@m uk-grid-divider" uk-grid>
                    <div class="uk-text-center">
                        <h3 class="uk-h3 uk-text-bold"><span uk-icon="info"></span> Chi Siamo</h3>

                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                    <div class="uk-text-center">
                        <h3 class="uk-h3 uk-text-bold"><span uk-icon="info"></span> Solo doule Certificate</h3>

                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                    <div class="uk-text-center">
                        <h3 class="uk-h3 uk-text-bold"><span uk-icon="info"></span> Privacy</h3>

                        <p class="uk-margin-left">
                            <a href="//www.iubenda.com/privacy-policy/369660" class="iubenda-white no-brand iubenda-embed" title="Privacy Policy">Privacy Policy</a>
                        </p>
                        <span class="uk-text-bold">Dolcenascita.it</span><br>è un progetto di <i>Script Media Group Ltd</i>
                        <p>
                            90 Leinster Road - Rathmines Dublin 6
                            <br>Vat IE​3458266BH
                        </p>

                    </div>
                </div>

            </div>
        </div>
    </section>





</template>


<script>
import {resize} from '~/tools/manageImages.js'
import callToAction from '~/components/callToAction.vue'

export default {
    data: function () {
        return {
            immagine_testata: this.$store.getters.immagineTestata,
            imageResize: resize,
        }
    },
    components: {
        callToAction,
    },


}

</script>

<style lang="scss">

.home {
    .text-rosso {
        color: $rosso;
    }
    .text-verde {
        color: $verde;
    }
    .uk-button {
        .uk-h2 {
            line-height: 2;
        }
    }
    dt {
        font-weight: bold;
    }
}



</style>
