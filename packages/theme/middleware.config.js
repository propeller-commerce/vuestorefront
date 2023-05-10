module.exports = {
  integrations: {
    propeller: {
      location: '@propeller-commerce/propeller-api/server',
      configuration: {
        api: {
          endpoint: process.env.PROPELLER_ENDPOINT,
          apiKey: process.env.PROPELLER_APIKEY,
        },
        cookies: {
          cartCookieName: 'propeller-vsf-cart',
        },
        siteId: 1,
        siteLanguage: 'NL',
        catalogueRoot: 100092,
        productListAttributes: ['EXAMEN_MERK', 'EXAMEN_ONDERWIJSTYPE'],
        defaultAttributesPage: 1,
        defaultAttributesOffset: 50,
        // crossupsellTypes: [ACCESSORIES, RELATED],
      },
    },
  },
};
