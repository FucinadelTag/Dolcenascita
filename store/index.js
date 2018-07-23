import _ from 'lodash'


export const state = () => ({
    settings: false,
    activeMenu: false,
})


export const mutations = {
    SET_SETTINGS (state, settings) {
        state.settings = settings || false
    }

}

export const getters = {
    getLogoUrl: state => {

        let settings = state.settings;

        let logoUrl = settings.logo;

        return logoUrl;
    },
    immagineTestata: state => {

        let settings = state.settings;

        let immagineUrl = settings.immagine_testata;

        return immagineUrl;
    },
    getTitle: state => {

        let settings = state.settings;

        let title = PrismicDom.RichText.asText(settings.data.title)

        return title;
    },
    getDescription: state => {

        let settings = state.settings;

        let description = PrismicDom.RichText.asText(settings.data.description)

        return description;
    },
    getImageTestata: state => {

        let settings = state.settings;

        let immagine_testata = settings.data.immagine_testata['larga'];

        return immagine_testata;
    }
}
