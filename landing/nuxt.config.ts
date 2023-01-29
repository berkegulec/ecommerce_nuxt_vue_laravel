// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'ECommerce',
            meta: [
                { name: 'description', content: 'Ecommerce' }
            ],
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100;200;300;400;500;600;700&display=swap", },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=EB+Garamond:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap", },
            ],
            script: [
                { src: '/js/jquery.min.js' },
                { src: '/js/popper.min.js' },
                { src: '/js/bootstrap.min.js' },
                { src: '/js/jquery.mmenu.all.min.js' },
            ],
            bodyAttrs: {
                class: "home home-9 title-9"
            }
        }
    },
    css: [
        '~/assets/libs/bootstrap/css/bootstrap.min.css',
        '~/assets/libs/feather-font/css/iconfont.css',
        '~/assets/libs/icomoon-font/css/icomoon.css',
        '~/assets/libs/font-awesome/css/font-awesome.css',
        '~/assets/libs/wpbingofont/css/wpbingofont.css',
        '~/assets/libs/elegant-icons/css/elegant.css',
        '~/assets/libs/slick/css/slick.css',
        '~/assets/libs/slick/css/slick-theme.css',
        '~/assets/libs/mmenu/css/mmenu.min.css',
        '~/assets/css/app.css',
        '~/assets/css/custom.css',
        '~/assets/css/responsive.css',
        'vue3-carousel/dist/carousel.css'
    ],
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },
    modules: [
        // ...
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
    ],
    alias: {
        pinia: process.env.NODE_ENV === 'production' ? '/node_modules/pinia/dist/pinia.mjs' : '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
})
