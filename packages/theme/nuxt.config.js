import webpack from 'webpack';
import theme from './themeConfig';

export default {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vue Storefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
      },
    ],
  },

  loading: { color: '#fff' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ['~/plugins/mollie.js'],

  // serverMiddleware: [
  //   { path: '/propeller_mollie', handler: '~/middleware/index.js' },
  // ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // to core
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    [
      '@vue-storefront/nuxt',
      {
        // @core-development-only-start
        coreDevelopment: true,
        // @core-development-only-end
        useRawSource: {
          dev: ['@propeller-commerce/propeller', '@vue-storefront/core'],
          prod: ['@propeller-commerce/propeller', '@vue-storefront/core'],
        },
      },
    ],
    // @core-development-only-start
    [
      '@vue-storefront/nuxt-theme',
      {
        generate: {
          replace: {
            apiClient: '@propeller-commerce/propeller-api',
            composables: '@propeller-commerce/propeller',
          },
        },
      },
    ],
    // @core-development-only-end
    /* project-only-start
    ['@vue-storefront/nuxt-theme'],
    project-only-end */
    ['@propeller-commerce/propeller/nuxt', {}],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      },
    ],
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@vue-storefront/middleware/nuxt',
    [
      '@propeller-commerce/propeller-mollie/nuxt',
      {
        propellerKey: process.env.PROPELLER_APIKEY || 'test',
        propellerApiUrl: process.env.PROPELLER_ENDPOINT || 'http://localhost:3000',
        mollieKey: process.env.MOLLIE_KEY || 'test',
        mollieIsTest: process.env.MOLLIE_TEST || true,
        mollieRedirectUrl: process.env.MOLLIE_REDIRECT_URL || '/checkout/thank-you',
        mollieWebhookUrl: process.env.MOLLIE_WEBHOOK_URL || '/api/extension/propeller-mollie/webhook',
      },
    ],
  ],

  i18n: {
    currency: 'USD',
    country: 'US',
    countries: [
      { name: 'US', label: 'United States', states: ['California', 'Nevada'] },
      { name: 'AT', label: 'Austria' },
      { name: 'DE', label: 'Germany' },
      { name: 'NL', label: 'Netherlands' },
    ],
    currencies: [
      { name: 'EUR', label: 'Euro' },
      { name: 'USD', label: 'Dollar' },
    ],
    locales: [
      { code: 'en', label: 'English', file: 'en.js', iso: 'en' },
      { code: 'de', label: 'German', file: 'de.js', iso: 'de' },
    ],
    defaultLocale: 'en',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol',
          },
        },
        de: {
          currency: {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol',
          },
        },
      },
    },
    detectBrowserLanguage: false,
  },

  styleResources: {
    scss: [
      require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
        paths: [process.cwd()],
      }),
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    transpile: ['vee-validate/dist/rules'],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || '',
        }),
      }),
    ],
    // needed for payment fs error
    // extend(config, { isDev, isClient }) {
    //   if (isClient) {
    //     config.node = {
    //       fs: 'empty',
    //       net: 'empty',
    //       target: true,
    //     };
    //   } else {
    //     config.node = {
    //       target: false,
    //     };
    //   }
    // },
  },

  router: {
    middleware: ['checkout'],
  },
  publicRuntimeConfig: {
    theme,
  },
  pwa: {
    meta: {
      theme_color: '#5ECE7B',
    },
  },
};
