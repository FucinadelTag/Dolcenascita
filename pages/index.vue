<template>
    <section class="home">
        <div class="uk-cover-container">
            <canvas width="500" height="500"></canvas>
            <img :src="imageResize(immagine_testata, '2000x500')" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-default uk-position-center">
                <h2 class="uk-h2 uk-text-center">Stai per diventare mamma o lo sei appena diventata?</h2>
                <h1 class="uk-heading-primary  uk-text-center">Una <span class="uk-text-bold text-rosso">Doula</span> può aiutarti</h1>
            </div>
        </div>
        <div class="uk-section uk-section-default uk-padding">
            <div class="uk-container">
                <div class="uk-grid uk-grid-match uk-child-width-expand@s uk-grid-small" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h2 class="uk-card-title uk-text-bold">Prima del PARTO</h2>
                            <img class="" :data-src="imageResize('/f/46475/1600x1027/8994c5caf0/prima-del-parto.jpg', '340x0')" alt="Doula" uk-img/>

                            <p><i>La doula ti aiuta a diventare madre, percorrendo insieme i primi passi di questo meraviglioso cammino</i></p>
                            <dl class="uk-description-list">
                                <dt>Consigli pratici</dt>
                                <dd>La doula sarà il tuo punto di riferimento e guida per il resto della gravidanza, saprà darti preziosi consigli per affrontare al meglio l’arrivo del tuo bimbo.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>Ascolto e vicinanza</dt>
                                <dd>La doula è una voce che ti ascolta e alla quale puoi confidare le tue preoccupazioni e paure, le tue gioie e aspettative.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>Preparazione al parto</dt>
                                <dd>Una doula ti preparerà al parto, permettendoti di affrontarlo in modo sereno e positivo. Insieme potrete praticare le tecniche di respirazione e le posizioni da assumere durante il travaglio.</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h2 class="uk-card-title uk-text-bold">Durante il PARTO</h2>
                            <img class="" :data-src="imageResize('/f/46475/2121x1414/48e3e9d795/durante-in-parto.jpg', '340x0')" alt="Doula" uk-img/>

                            <p><i>La doula ti assiste durante il travaglio e il parto, fornendoti un continuo supporto emotivo e pratico.</i></p>
                            <dl class="uk-description-list">
                                <dt>Ti accompagna</dt>
                                <dd>Avere una doula al tuo fianco ti farà affrontare questo grande giorno con più consapevolezza e serenità.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>Sta viciono a te a al tuo compagno</dt>
                                <dd>Il parto è un momento imprevedibile, ma la doula risponderà in ogni momento alle vostre domande per capire ciò che sta accadendo.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>Ti da una mano</dt>
                                <dd>La doula può darti suggerimenti sulle posizioni da assumere durante il travaglio, ti aiuta a concentrarti sulla respirazione durante le contrazioni più dolorose, allevia il dolore con massaggi mirati.</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h2 class="uk-h3 uk-text-bold">Dopo il PARTO</h2>
                            <img class="" :data-src="imageResize('/f/46475/1688x1125/114ae32fce/dopo-il-parto1.jpg', '340x0')" alt="Doula" uk-img/>
                            <p><i>Dopo la nascita, la doula ti aiuterà ad avviare l’allattamento e a incoraggiare il legame tra il nuovo arrivato e il resto della famiglia.</i></p>
                            <dl class="uk-description-list">
                                <dt>Allattamento al seno</dt>
                                <dd>L’allattamento al seno può a volte essere difficoltoso e molte madri rinunciano dopo poche settimane. La doula ti assisterà in ogni fase, assicurandoti che l’allattamento sia ben avviato, se lo vorrai.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>Aiuto nei primi mesi</dt>
                                <dd>La doula ti aiuterà a capire le necessità del nuovo nato, a riconoscere i suoi pianti e ad assisterlo, fornendoti un appoggio reale.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>Ascolto e vicinanza</dt>
                                <dd>I primi mesi sono i più difficili, soprattutto per le mamme. La doula ti fornirà un sostegno emotivo e fisico, sarà un aiuto su cui potrai contare.</dd>
                            </dl>
                        </div>
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
                            <p class="uk-text-lead">
                                La parola doula deriva dal greco e significa <br> <i>“servitrice delle donne”</i>.

                            </p>
                            <p class="uk-text-lead">
                                Una doula fa proprio questo: si prende cura della madre, sostenendola emotivamente e fisicamente dalla gravidanza fino ai primi mesi dopo la nascita. La doula aiuta le donne a vivere in modo sereno e memorabile uno dei momenti più delicati, impegnativi e straordinari della vita.
                            </p>


                        </div>
                        <div>
                            <img class="" :data-src="imageResize('/f/46475/848x565/34b0af0548/prima-del-parto1.jpg', '600x300')" alt="Doula" uk-img />
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

        <div class="uk-cover-container uk-height-medium">
            <img :src="imageResize('/f/46475/3500x2333/050b7025a7/copertina.jpg', '2000x1000')" alt="" uk-cover>
        </div>

        <!-- <div class="uk-section">
            <img class="uk-height-large" :src="imageResize('/f/46475/3500x2333/050b7025a7/copertina.jpg', '2000x1000')" alt=""/>
        </div> -->


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
