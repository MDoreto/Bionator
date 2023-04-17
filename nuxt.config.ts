// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Bionator',
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    ssr: false,
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
})
