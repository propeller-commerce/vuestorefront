import { Context, useFacetFactory, FacetSearchResult } from '@vue-storefront/core';
import type { UseFacetSearchParams as SearchParams } from '../types';
import { ref } from '@nuxtjs/composition-api';

const serverErrors = ref([]);

const availableSortingOptions = [
  { label: 'Default', value: '' },
  { label: 'Relevance A-Z', value: 'relevance_asc' },
  { label: 'Relevance Z-A', value: 'relevance_desc' },
  { label: 'Name A-Z', value: 'name_asc' },
  { label: 'Name Z-A', value: 'name_desc' },
  { label: 'Short name A-Z', value: 'shortName_asc' },
  { label: 'Short name Z-A', value: 'shortName_desc' },
  { label: 'Product SKU A-Z', value: 'sku_asc' },
  { label: 'Product SKU Z-A', value: 'sku_desc' },
  { label: 'Price from low to high', value: 'price_asc' },
  { label: 'Price from high to low', value: 'price_desc' },
];

/**
 * Base category id for product listings (v2 equivalent of the v1
 * `catalogueRoot`). Overridable via the search input's `categoryId`.
 */
const DEFAULT_CATEGORY_ID = 1736;
const DEFAULT_LANGUAGE = 'NL';
const DEFAULT_STATUSES = ['A']; // active products

/**
 * v1 filter keys arrive as `{TYPE}:{ATTRIBUTE_ID}` mapping to a values array.
 * v2 wants `ProductTextFilterInput[]` of `{ name, values, exclude }`.
 */
const constructTextFilters = (inputFilters: Record<string, string[]>) => {
  const filters: any[] = [];
  Object.keys(inputFilters || {}).forEach((key) => {
    const attribute = key.split(':');
    const name = attribute.length === 2 ? attribute[1] : key;
    filters.push({
      name,
      values: inputFilters[key],
      exclude: false,
    });
  });
  return filters;
};

/** Maps a v1 `field_order` sort string to a v2 `ProductSortInput`. */
const SORT_FIELD_MAP: Record<string, string> = {
  relevance: 'RELEVANCE',
  name: 'NAME',
  shortName: 'SHORT_NAME',
  sku: 'SKU',
  price: 'PRICE',
};

const constructSortInputs = (sortData: string) => {
  if (!sortData) return [];
  const [field, order] = sortData.split(/_/gi);
  const mapped = SORT_FIELD_MAP[field];
  if (!mapped) return [];
  return [{ field: mapped, order: (order || 'asc').toLowerCase() }];
};

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<any>) => {
    serverErrors.value = [];
    const offset = params.input.offset ? params.input.offset : 12;
    const page = params.input.page ? params.input.page : 1;
    const inputFilters = params.input.filters ? params.input.filters : {};
    const hasBundle = params.input.hasBundle || null;
    // The storefront passes `categorySlug`; v2 resolves listings by category id.
    const categoryId = params.input.categoryId || DEFAULT_CATEGORY_ID;

    // Build the v2 ProductSearchInput (api-client-v2 `products`/`bundles`
    // forward it straight to ProductService.getProducts).
    const productSearchParams: any = {
      language: DEFAULT_LANGUAGE,
      categoryId,
      getDescendants: true,
      statuses: DEFAULT_STATUSES,
      offset,
      page,
      textFilters: constructTextFilters(inputFilters),
      sortInputs: constructSortInputs(params.input.sort || ''),
    };

    const { data, errors } = hasBundle
      ? await context.$propeller.api.bundles(productSearchParams)
      : await context.$propeller.api.products(productSearchParams);

    serverErrors.value.push(...(errors || []));

    // v2 returns a flat ProductsResponse ({ items, itemsFound, pages, page,
    // filters }). Normalize to the facet-result shape facetGetters expects.
    const response = data?.products || {};
    return {
      items: response.items || [],
      total: response.itemsFound,
      availableFilters: response.filters,
      category: { id: categoryId },
      itemsPerPage: response.offset ?? offset,
      page: response.page ?? page,
      pages: response.pages,
      availableSortingOptions,
      perPageOptions: [12, 36, 108],
    };
  },
};

export const useFacet = useFacetFactory<SearchParams>(factoryParams);
export const errorsFacet = serverErrors;
