import {
  Context,
  useShippingFactory,
  UseShippingParams,
} from '@vue-storefront/core';
import type { CartAddress as ShippingAddress } from '@propeller-commerce/propeller-api';
import type { UseShippingAddParams as AddParams } from '../types';
import { ref } from '@nuxtjs/composition-api';

const serverErrors = ref([]);

const params: UseShippingParams<ShippingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    // console.log('[Propeller] loadShipping', { customQuery });
    serverErrors.value = [];
    const cartCookieName = 'propeller-vsf-cart';

    const existngCartId =
      context.$propeller.config.app.cookies.get(cartCookieName);

    if (!existngCartId) return {};

    const cart = await context.$propeller.api.cart(existngCartId);
    serverErrors.value.push(...cart.errors || []);
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
    serverErrors.value = [];
    // TODO: temp
    // get this from settings
    const cartCookieName = 'propeller-vsf-cart';
    const cartId = context.$propeller.config.app.cookies.get(cartCookieName);

    const shippingData = {
      cartId,
      type: 'delivery',
      ...shippingDetails,
    };

    const { data, errors } = await context.$propeller.api.cartUpdateAddress(
      shippingData
    );
    serverErrors.value.push(...errors || []);

    return data;
  },
};

export const useShipping = useShippingFactory<ShippingAddress, AddParams>(
  params
);
export const errorsShipping = serverErrors;
