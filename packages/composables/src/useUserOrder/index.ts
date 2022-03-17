import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams,
} from '@vue-storefront/core';
import type { Order } from '@propeller-commerce/propeller-api';
import type { useUserOrderSearchParams as SearchParams } from '../types';

const params: UseUserOrderFactoryParams<Order, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (context: Context, params) => {
    console.log('Mocked: searchOrders');
    return {} as unknown as Order;
  },
};

export const useUserOrder = useUserOrderFactory<Order, SearchParams>(params);
