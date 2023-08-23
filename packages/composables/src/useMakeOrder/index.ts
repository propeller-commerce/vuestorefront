import {
  Context,
  useMakeOrderFactory,
  UseMakeOrderFactoryParams,
} from '@vue-storefront/core';
import type { Order } from '@propeller-commerce/propeller-api';
import { ref } from '@nuxtjs/composition-api';

const serverErrors = ref([]);

const factoryParams: UseMakeOrderFactoryParams<Order> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  make: async (context: Context, { customQuery }) => {
    // TODO: temp
    // get this from settings
    serverErrors.value = [];
    const cartCookieName = 'propeller-vsf-cart';

    const cartId = context.$propeller.config.app.cookies.get(cartCookieName);

    if (!cartId) return {};

    const { data, errors } = await context.$propeller.api.cartProcess(
      { cartId },
      customQuery
    );

    serverErrors.value.push(...errors || []);

    return data.cartProcess.cartOrderId;
  },
};

export const useMakeOrder = useMakeOrderFactory<Order>(factoryParams);
export const errorsMakeOrder = serverErrors;
