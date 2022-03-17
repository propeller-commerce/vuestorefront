import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet,
} from '@vue-storefront/core';

import { buildFacets } from '../useFacet/_utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params, criteria?: string[]): AgnosticFacet[] {
  console.log('Mocked: facetGetters.getAll');
  return [
    {
      type: 'string',
      id: '1',
      value: 'mocked',
      attrName: '',
      count: 3,
      selected: false,
      metadata: 'any',
    },
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getGrouped = (searchData, criteria?: string[]): AgnosticGroupedFacet[] =>
  buildFacets(searchData, 'reduceForGroupedFacets', criteria)?.filter(
    (facet) => facet.options && facet.options.length > 0
  );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(searchData): AgnosticSort {
  if (
    !searchData ||
    !searchData.data ||
    !searchData.data.availableSortingOptions
  ) {
    return {
      options: [],
      selected: '',
    } as AgnosticSort;
  }

  return {
    options: searchData.data.availableSortingOptions,
    selected: searchData.input.sort,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: null,
    isCurrent: false,
    count: 0,
  };
}

const getProducts = (searchData): any => {
  if (!searchData || !searchData.data || !searchData.data.items) {
    return [];
  }
  return searchData.data.items;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(searchData): AgnosticPagination {
  const totalPages = searchData?.data?.pages;

  return {
    currentPage:
      (searchData?.input?.page > totalPages ? 1 : searchData?.input?.page) || 1,
    totalPages,
    totalItems: searchData?.data?.total ? searchData.data.total : 0,
    itemsPerPage: searchData?.input?.itemsPerPage || 12,
    pageOptions: [12, 36, 108],
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params): AgnosticBreadcrumb[] {
  console.log('Mocked: facetGetters.getBreadcrumbs');
  return [];
}

export const facetGetters: FacetsGetters<any, string[]> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination,
};
