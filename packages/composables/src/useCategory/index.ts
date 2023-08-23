import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams,
} from '@vue-storefront/core';
import type { Category } from '@propeller-commerce/propeller-api';
import type { UseCategorySearchParams as SearchParams } from '../types';
import { ref } from '@nuxtjs/composition-api';

const serverErrors = ref([]);
const params: UseCategoryFactoryParams<Category, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categorySearch: async (context: Context, params) => {
    serverErrors.value = [];

    const { data, errors } = await context.$propeller.api.categories();

    serverErrors.value.push(...errors || []);
    return data.category.categories || {};
  },
};

export const useCategory = useCategoryFactory<Category, SearchParams>(params);
export const errorsCategory = serverErrors;
