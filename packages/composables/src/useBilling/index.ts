import { Context, useBillingFactory, UseBillingParams } from '@vue-storefront/core';
import type { CartAddress as BillingAddress } from '@propeller-commerce/propeller-api';
import type { UseBillingAddParams as AddParams } from '../types';
import { ref } from '@nuxtjs/composition-api';

const serverErrors = ref([]);

const params: UseBillingParams<BillingAddress, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('[Propeller] loadBilling', { customQuery });

    serverErrors.value = [];
    const cartCookieName = 'propeller-vsf-cart';

    const existingCartId = context.$propeller.config.app.cookies.get(cartCookieName);

    if (!existingCartId) return {};

    const cart = await context.$propeller.api.cart(existingCartId);

    serverErrors.value.push(...cart.errors || []);

    return cart.data.cart?.invoiceAddress;
    // TODO: store address in store and get it fromt here
    // if (!context.cart.cart?.value?.shipping_addresses) {
    //   await context.cart.load({ customQuery });
    // }

    // return context.cart.cart.value.shipping_addresses[0];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { params, billingDetails, customQuery }) => {
    console.log('Propeller: useBilling.save');
    serverErrors.value = [];
    // TODO: temp
    // get this from settings
    const cartCookieName = 'propeller-vsf-cart';
    const cartId = context.$propeller.config.app.cookies.get(cartCookieName);

    const shippingData = {
      cartId,
      type: 'invoice',
      ...billingDetails,
    };

    const { data, errors } = await context.$propeller.api.cartUpdateAddress(shippingData);
    serverErrors.value.push(...errors || []);

    return data;
  },
};

export const useBilling = useBillingFactory<BillingAddress, AddParams>(params);
export const errorsBilling = serverErrors;
