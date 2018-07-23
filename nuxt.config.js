module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'dolcenascita',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    modules: [
        [
            'nuxt-sass-resources-loader',
            './assets/scss/variables.scss',
        ],
        ['storyblok-nuxt', {
          accessToken: 'eP12iCub8i9xBo2f36h9Egtt',
          cacheProvider: 'memory'
        }]
    ],
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    plugins: [
        { src: '~/plugins/uikit.js', ssr: false }
    ],
    router: {
        middleware: ['getSettings']
    },
        /*
        ** Build configuration
        */
    build: {
            /*
            ** Run ESLint on save
            */
    }
}
