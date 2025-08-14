export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: 'Qidah Restaurant',
            titleTemplate: '%s | Qidah Restaurant',
            htmlAttrs: {
                lang: 'ar',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
                },
                { hid: 'description', name: 'description', content: 'Authentic Middle Eastern Cuisine' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
                },
            ],
        },
    },

    runtimeConfig: {
        public: {
            apiBase: '/.netlify/functions/api-proxy'
        }
    },

    css: ['~/assets/css/app.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

    i18n: {
        defaultLocale: 'ar',
        locales: [
          { code: 'en', name: 'English', file: 'en.json', dir: 'ltr' },
          { code: 'ar', name: 'العربية', file: 'ar.json', dir: 'rtl' }
        ],
        strategy: 'no_prefix',
        lazy: true,
        vueI18n: './i18n.config.ts'
    },

    router: {
        options: { linkExactActiveClass: 'active' },
    },
    compatibilityDate: '2024-09-21',
    
    components: {
        global: true,
        dirs: ['~/components']
    },
    
    build: {
        transpile: ['@iconify/vue']
    }
});
