const env = require('dotenv').config();
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/test_1.0/'
    }
  } : {}
export default {
    mode: 'universal',
    // mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Promote Your YouTube Video, Get More YouTube Views | Youtube Advertising by Sprizzy',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width,initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Sprizzy helps your video go viral by promoting it across hundreds of websites.'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'youtube promotion, youtube views, youtube advertising, youtube subscribers'
            }
        ],
        script: [
            { src: 'https://services.nofraud.com/js/7418/customer_code.js' } //The Device JavaScript
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        {src: '@/assets/scss/main.scss', lang: 'scss'},
        {src: "vuejs-noty/dist/vuejs-noty.css", lang: 'css'}
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/vue-inject.js'},
        {src: '~/plugins/tracking.js', mode: 'client'},
        {src: '~/plugins/client-only.js', mode: 'client'},
        {src: '~/plugins/server-only.js', mode: 'server'}
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/sentry',
        '@nuxtjs/style-resources',
        'portal-vue/nuxt'
    ],

    // sentry: {
    //     dsn: '', // Enter your project's DSN here
    //     config: {}, // Additional config
    // },
    ...routerBase,
    /*
    ** Build configuration
    */
    build: {
        // extractCSS: true,

        /*
        ** You can extend webpack config here
        */
        // publicPath:  + "/_nuxt/",

        extend(config, {isClient, loaders: {vue}}) {
            // Extend only webpack config for client-bundle
            if (isClient) {
                vue.transformAssetUrls.video = ['src', 'poster']
            }
        }
    },
    styleResources: {
        scss: [
            'assets/scss/main.scss',
        ]
    },
    env: env.parsed,
    server: {
        port: 8000
    }
}
