import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams,
} from '@vue-storefront/core';
import type { Category } from '@propeller-commerce/propeller-api';
import type { UseCategorySearchParams as SearchParams } from '../types';

const params: UseCategoryFactoryParams<Category, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categorySearch: async (context: Context, params) => {
    const { data } = await context.$propeller.api.categories();

    return data.category.categories || {};
  },
};

export const useCategory = useCategoryFactory<Category, SearchParams>(params);
