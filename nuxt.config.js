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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' },
        ]
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
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
          cacheProvider: 'memory',
          timeout: 5000
        }]
    ],
    serverMiddleware: [
        'redirect-ssl',
    ],
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    plugins: [
        { src: '~/plugins/uikit.js', ssr: false },
        { src: '~/plugins/iubenda.js', ssr: false },
        { src: '~/plugins/analitycs.js', ssr: false },

    ],
    router: {
        middleware: ['getSettings']
    },
    /*
    ** Build configuration
    */
    build: {
        vendor: ['axios'],
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            }
        }
    },
    performance: {
        gzip: false
    },
    dev: false
}
