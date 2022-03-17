import {
  Context,
  useShippingFactory,
  UseShippingParams,
} from '@vue-storefront/core';
import type { CartAddress as ShippingAddress } from '@propeller-commerce/propeller-api';
import type { UseShippingAddParams as AddParams } from '../types';

const params: UseShippingParams<ShippingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    // console.log('[Propeller] loadShipping', { customQuery });

    const cartCookieName = 'propeller-vsf-cart';

    const existngCartId =
      context.$propeller.config.app.cookies.get(cartCookieName);

    if (!existngCartId) return {};

    const cart = await context.$propeller.api.cart(existngCartId);

    return cart.data.cart?.deliveryAddress;
    // TODO: store address in store and get it fromt here
    // if (!context.cart.cart?.value?.shipping_addresses) {
    //   await context.cart.load({ customQuery });
    // }

    // return context.cart.cart.value.shipping_addresses[0];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingDetails, customQuery }) => {
    console.log('Propeller: useShipping.save');

    // TODO: temp
    // get this from settings
    const cartCookieName = 'propeller-vsf-cart';
    const cartId = context.$propeller.config.app.cookies.get(cartCookieName);

    const shippingData = {
      cartId,
      type: 'delivery',
      ...shippingDetails,
    };

    const { data } = await context.$propeller.api.cartUpdateAddress(
      shippingData
    );

    return data;
  },
};

export const useShipping = useShippingFactory<ShippingAddress, AddParams>(
  params
);
