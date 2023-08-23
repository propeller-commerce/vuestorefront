import {
  Context,
  useProductFactory,
  UseProductFactoryParams,
} from '@vue-storefront/core';
import type { Product } from '@propeller-commerce/propeller-api';
import type { UseProductSearchParams as SearchParams } from '../types';
import { ref } from '@nuxtjs/composition-api';

const serverErrors = ref([]);

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    serverErrors.value = [];
    if (params.id) {
      const { data, errors } = await context.$propeller.api.productDetail(params);

      serverErrors.value.push(...errors || []);

      return data?.product || {};

    } else if (params.bundleId) {

      const { data, errors } = await context.$propeller.api.bundleDetail(params);

      serverErrors.value.push(...errors || []);

      return data?.bundle || {};
    }

    return {};
  },
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
export const errorsProduct = serverErrors;
