import {
  Context,
  useMakeOrderFactory,
  UseMakeOrderFactoryParams,
} from '@vue-storefront/core';
import type { Order } from '@propeller-commerce/propeller-api';

const factoryParams: UseMakeOrderFactoryParams<Order> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  make: async (context: Context, { customQuery }) => {
    // TODO: temp
    // get this from settings
    const cartCookieName = 'propeller-vsf-cart';

    const cartId = context.$propeller.config.app.cookies.get(cartCookieName);

    if (!cartId) return {};

    const { data } = await context.$propeller.api.cartProcess(
      { cartId },
      customQuery
    );

    return data.cartProcess.cartOrderId;
  },
};

export const useMakeOrder = useMakeOrderFactory<Order>(factoryParams);
