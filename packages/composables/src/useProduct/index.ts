import {
  Context,
  useProductFactory,
  UseProductFactoryParams,
} from '@vue-storefront/core';
import type { Product } from '@propeller-commerce/propeller-api';
import type { UseProductSearchParams as SearchParams } from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    if (params.id) {
      const { data } = await context.$propeller.api.productDetail(params);

      return data?.product || {};
    } else if (params.bundleId) {
      const { data } = await context.$propeller.api.bundleDetail(params);

      return data?.bundle || {};
    }

    return {};
  },
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
