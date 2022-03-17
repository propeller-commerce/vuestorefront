import { integrationPlugin } from '@vue-storefront/core';
import cookie from '@propeller-commerce/propeller/nuxt/cookie';

const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>');

export default integrationPlugin(({ app, res, req, integration }) => {
  const { set, remove, get } = cookie(req, res);

  integration.configure('propeller', {
    ...moduleOptions,
    app: {
      cookies: {
        set,
        remove,
        get,
      },
    },
  });
});
