import { getLocalizedValue } from '@propeller-commerce/propeller-v2-core-ui';

const LANG = 'NL';

/**
 * v2 facet option list: each AttributeFilter exposes `textFilters[]` of
 * `{ value, count, isSelected }`. Map to the storefront's option shape.
 */
const createFacetsFromOptions = (filter: any) => {
  const options = filter.textFilters || [];
  return options.map(({ value, count, isSelected }: any) => ({
    type: 'string',
    id: value,
    attrName: value,
    value,
    selected: !!isSelected,
    count,
  }));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
export const reduceForGroupedFacets = (facets, filters) => (prev, curr) => {
  return [
    ...prev,
    {
      id: curr,
      label: curr,
      options: [],
      count: null,
    },
  ];
};

/**
 * Builds the grouped-facet structure the storefront sidebar consumes from the
 * v2 `availableFilters` (AttributeFilter[]).
 *
 * v1→v2 shape change: v1 filters had top-level `{ isSearchable, type, id,
 * description, textFilter[] }`; v2 nests the searchable/name/description under
 * `attributeDescription` and renames `textFilter` → `textFilters`. The output
 * shape (`{ id: type+':'+name, label, type, options }`) is preserved so the
 * existing ProductsFilters component and the `{TYPE}:{ATTRIBUTE_ID}` filter-key
 * convention keep working.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unused-vars
export const buildFacets = (searchData, reduceFn, criteria?: string[]) => {
  if (!searchData?.data?.availableFilters) {
    return [];
  }

  const {
    data: { availableFilters },
  } = searchData;

  return availableFilters
    .filter((filter: any) => filter?.attributeDescription?.isSearchable)
    .map((filter: any) => {
      const name = filter.attributeDescription?.name || filter.id;
      return {
        id: filter.type + ':' + String(name).toLowerCase(),
        label: getLocalizedValue(filter.attributeDescription?.descriptions, LANG) || name,
        count: 1,
        type: filter.type,
        attrName: 'filterKey',
        selected: false,
        options: createFacetsFromOptions(filter),
      };
    });
};
