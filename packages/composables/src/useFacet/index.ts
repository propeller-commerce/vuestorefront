import { Context, useFacetFactory, FacetSearchResult } from '@vue-storefront/core';
import type { UseFacetSearchParams as SearchParams } from '../types';

const availableSortingOptions = [
  {
    label: 'Default',
    value: '',
  },
  {
    label: 'Relevance A-Z',
    value: 'relevance_asc',
  },
  {
    label: 'Relevance Z-A',
    value: 'relevance_desc',
  },
  {
    label: 'Name A-Z',
    value: 'name_asc',
  },
  {
    label: 'Name Z-A',
    value: 'name_desc',
  },
  {
    label: 'Short name A-Z',
    value: 'shortName_asc',
  },
  {
    label: 'Short name Z-A',
    value: 'shortName_desc',
  },
  {
    label: 'Product SKU A-Z',
    value: 'sku_asc',
  },
  {
    label: 'Product SKU Z-A',
    value: 'sku_desc',
  },
  {
    label: 'Price from low to high',
    value: 'price_asc',
  },
  {
    label: 'Price from high to low',
    value: 'price_desc',
  },
];

// eslint-disable-next-line @typescript-eslint/ban-types
const constructTextFilterObject = (inputFilters: Object) => {
  // filters are constructed as
  // {TYPE}:{ATTRIBUTE_ID}={ATTRIBUTE_VALUE}
  const filters = [];

  Object.keys(inputFilters).forEach((key) => {
    // in case {TYPE} is not defined (backwards compatibility)
    const attribute = key.split(':');
    let type = 'text';
    let searchId = '';

    if (attribute.length === 2) {
      // type is provided
      type = attribute[0].toLowerCase();
      searchId = attribute[1].toLowerCase();
    } else {
      // type is not provided
      searchId = key.toLowerCase();
    }

    filters.push({
      searchId: 'attr_' + searchId,
      values: inputFilters[key],
      type,
    });
  });

  return filters;
};

const constructSortObject = (sortData: string) => {
  const baseData = sortData.split(/_/gi);
  let data = null;

  if (baseData.length === 2) {
    data = {
      field: baseData[0],
      order: baseData[1],
    };
  }

  return data;
};

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<any>) => {
    const offset = params.input.offset ? params.input.offset : 12;
    const page = params.input.page ? params.input.page : 1;
    const inputFilters = params.input.filters ? params.input.filters : {};
    const categorySlug = params.input.categorySlug;
    const hasBundle = params.input.hasBundle || null;

    const productParams = {
      textFilters: [
        ...constructTextFilterObject({
          ...inputFilters,
        }),
      ],
      offset,
      page,
      sort: constructSortObject(params.input.sort || ''),
    };

    const productSearchParams = {
      offset: productParams.offset,
      page: productParams.page,
      categorySlug,
      textFilters: productParams.textFilters,
      sort: productParams.sort,
    };

    const { data } = hasBundle
      ? await context.$propeller.api.bundles(productSearchParams)
      : await context.$propeller.api.products(productSearchParams);

    return {
      items: data?.category?.products?.items || [],
      total: data?.category?.products?.itemsFound,
      availableFilters: data?.category?.products?.filters,
      category: { id: data?.category?.categoryId },
      itemsPerPage: data?.category?.products?.offset,
      page: data?.category?.products?.page,
      pages: data?.category?.products?.pages,
      availableSortingOptions,
      perPageOptions: [12, 36, 108],
    };
  },
};

export const useFacet = useFacetFactory<SearchParams>(factoryParams);
