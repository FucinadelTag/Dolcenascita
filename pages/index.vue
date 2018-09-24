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
                            <h2 class="uk-card-title uk-text-bold">In GRAVIDANZA</h2>
                            <img class="" :data-src="imageResize('/f/46475/1600x1027/8994c5caf0/prima-del-parto.jpg', '340x0')" alt="Doula" uk-img/>

                            <p><i>La doula sarà il tuo punto di riferimento per il resto della gravidanza, saprà darti preziosi consigli per affrontare al meglio l’arrivo del tuo bimbo.</i></p>
                            <dl class="uk-description-list">
                                <dt>ASCOLTO</dt>
                                <dd>La doula ti ascolta e ti sostiene emotivamente nelle decisioni da prendere e nelle piccole e grandi crisi. Costruisce una relazione empatica e di fiducia, che faccia sentire tutti i protagonisti dell'evento nascita a proprio agio.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>RICERCA DI INFORMAZIONI</dt>
                                <dd>Ti aiuta a cercare informazioni basate su evidenze scientifiche, ti aiuta nella compilazione del piano nascita, può informarti sulle domande del consenso informato e su come comunicare con il personale sanitario per sostenere le tue richieste.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>VICINANZA</dt>
                                <dd>Può accompagnarti alle visite ginecologiche e agli esami significativi, come l’amniocentesi. Può aiutarti con i figli maggiori negli ultimi mesi di gravidanza e organizzare il rientro a casa quando ci sono figli più grandi.</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h2 class="uk-card-title uk-text-bold">Durante il PARTO</h2>
                            <img class="" :data-src="imageResize('/f/46475/2121x1414/48e3e9d795/durante-in-parto.jpg', '340x0')" alt="Doula" uk-img/>

                            <p><i>Durante il travaglio e il parto la doula sostiene la coppia emotivamente e fisicamente, sia in ospedale che a domicilio con la presenza di un’ostetrica.</i></p>
                            <dl class="uk-description-list">
                                <dt>STA VICINO A TE E AL TUO COMPAGNO</dt>
                                <dd>La doula è una presenza continuativa con cui avete stabilito una relazione intima e confidenziale. Vi incoraggia, rassicura e conforta durante tutto il momento del travaglio. Può ricordarvi i vostri obiettivi e come raggiungerli.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>TI DA UNA MANO</dt>
                                <dd>Si prende cura dei bisogni fisici della madre, come bere, mangiare, svuotare la vescica, la incoraggia a mantenere una posizione verticale ed essere protagonista del proprio parto, toccare i confini delle proprie possibilità e oltrepassarli.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>TI ACCOMPAGNA</dt>
                                <dd>Una Doula può fare massaggi specifici, alleggerire l'atmosfera con humour, proteggere l'intimità del parto, giocare con la donna senza interferire con il lavoro del travaglio, aiutare a rendere il parto una gioia e una festa.</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h2 class="uk-h3 uk-text-bold">Dopo la NASCITA</h2>
                            <img class="" :data-src="imageResize('/f/46475/1024x700/e88f191792/foto2.jpg', '340x0')" alt="Doula" uk-img/>
                            <p><i>Dopo la nascita aiuta a elaborare l'esperienza del parto. Sarà un riferimento per il puerperio (primi quaranta giorni) e per tutto il primo anno di vita.</i></p>
                            <dl class="uk-description-list">
                                <dt>AIUTO NEI PRIMI MESI</dt>
                                <dd>La doula vi aiuta nella "riorganizzazione della vita" dopo la nascita del bimbo. I ritmi sonno-veglia vengono spesso stravolti dal nuovo/a arrivato/a. Una Doula può aiutare la coppia a trovare una propria dimensione nel cambiamento.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>ALLATTAMENTO AL SENO</dt>
                                <dd>Sostiene e incoraggia la madre nell'allattamento al seno, nel rispetto delle sue scelte. Se necessario, la doula può indirizzare una madre ai professionisti competenti dell'allattamento in caso di problemi che esulano dalle sue competenze.</dd>
                            </dl>
                            <dl class="uk-description-list">
                                <dt>ASCOLTO E VICINANZA</dt>
                                <dd>Sostiene la coppia nel sentirsi competente nel risolvere i problemi di accudimento. Si può occupare anche della casa, accompagnare a scuola i figli maggiori e occuparsi di tutto quello che può alleviare la fatica dei genitori.</dd>
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
                            <!-- <p class="uk-text-lead">
                                La parola doula deriva dal greco e significa <br> <i>“servitrice delle donne”</i>.

                            </p> -->
                            <p class="">
                                La Doula è una <strong>figura professionale</strong> che si occupa del sostegno emotivo e del benessere della donna e della famiglia dalla gravidanza fino al primo anno di vita del bambino.
                            </p>
                            <p>
                                È una donna che – forte della sua esperienza personale e della sua formazione – <strong>offre un sostegno su misura, intimo e confidenziale</strong>, nel pieno rispetto delle scelte delle persone che assiste.
                            </p>
                            <p>
                                Offre ascolto, informazioni, orientamento e accudimento pratico. Un buon modo di definire l’attività della Doula è che <strong>“fa da madre alla madre”</strong>.
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
                                Chiama il nostro numero <span class="uk-dark"><a href="tel:3392713095">339 271 3095</a></span> oppure <a href="#form">scrivici</a>. Senza alcun impegno potrai parlare con una Doula trovando una risposta a tutte le tue domande.
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
                                Se lo riterrai opportuno potrai incominciare il tuo percorso con la Doula acqustando un pacchetto da 10, 20 o 30 ore.
                            </p>

                        </div>
                    </div>

            </div>
        </div>

        <div class="uk-section uk-section-primary uk-padding">
            <div class="uk-container">
                <div class="uk-grid uk-grid-small uk-child-width-1-2@m uk-grid-divider" uk-grid>
                    <div>
                        <h3 id="form" class="uk-h3 uk-text-bold"><span uk-icon="mail"></span> Invia una richiesta</h3>

                        <form v-on:submit.prevent ="submitForm($event)">
                            <fieldset class="uk-fieldset">
                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Email</label>
                                    <input class="uk-input" v-model="email" name="email" type="email" placeholder="Inserisci il tuo indirizzo email" required>
                                </div>



                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Richiesta</label>
                                    <textarea class="uk-textarea" v-model="message" name="message" rows="5" placeholder="Raccontaci qualcosa di te e di cosa hai bisogno"></textarea>
                                </div>


                            </fieldset>
                            <button type="submit" class="uk-button uk-button-default">Invia</button>
                        </form>

                    </div>
                    <div>
                        <h3 class="uk-h3 uk-text-bold"><span uk-icon="receiver"></span> Chiama una Doula Ora</h3>

                            <a href="tel:3392713095" class="uk-link-heading">
                                <span class="uk-h1 text-verde uk-margin-left">
                                    339 271 3095
                                </span>

                            </a>
                        <p>
                            Ti risponderà una Doula alla quale potrai fare le tue domande<br><strong>senza alcun impegno</strong>.
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
                            Siamo un gruppo di doule in costante formazione e ricerca .Dopo aver sperimentato la nostra esperienza di maternità, averne scoperto luci e ombre il nostro lavoro è quello di stare accanto alle madri  nel modo più adatto a ciascuna di loro.
                        </p>

                    </div>
                    <div class="uk-text-center">
                        <h3 class="uk-h3 uk-text-bold"><span uk-icon="info"></span> Solo doule Formate</h3>

                        <p>
                            La scuola delle doule getta le basi per iniziare il nostro lavoro, ma ogni doula approfondisce la propria formazione con aggiornamenti costanti, passione per la ricerca e la conoscenza per ricoprire in maniera etica e responsabile il suo ruolo.
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
import axios from 'axios'

export default {
    data: function () {
        return {
            immagine_testata: this.$store.getters.immagineTestata,
            imageResize: resize,
            email:'',
            message:''
        }
    },
    components: {
        callToAction,
    },
    methods: {
        submitForm: function (e) {
            //let item = prepareItem (this.prodotto);
            let actionUrl = "https://hooks.zapier.com/hooks/catch/178342/q0sbf0/";

            console.log(this.email);

            // const store = this.$store;
            // var self = this;
            //
            axios.post(actionUrl, {
                email: this.email,
                message: this.message,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(function (response) {
                console.log(response);
                window.location.href = '/grazie';
            })
            .catch(function (error) {
                console.log(error);
            });
            //
            // ga('send', {
            //     hitType: 'event',
            //     eventCategory: 'Cart',
            //     eventAction: 'add'
            // });

        }
    }


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
