import { AgnosticMediaGalleryItem, AgnosticAttribute, AgnosticPrice, ProductGetters } from '@vue-storefront/core';
import type { Product } from '@propeller-commerce/propeller-api-v2';
import {
  getLocalizedValue,
  getProductImageUrl,
  extractAttributeValues,
} from '@propeller-commerce/propeller-v2-core-ui';

type ProductFilter = any;

/**
 * v2 productGetters — identical public surface to the v1 getters (same method
 * names + return shapes the storefront consumes), but reading v2 Product shapes
 * via propeller-v2-core-ui helpers.
 *
 * Key v1→v2 field changes handled here:
 * - localized `name[0].value` / `slug[0].value` → `names[]` / `slugs[]` arrays (getLocalizedValue)
 * - `attributeValues.items[]` → `attributes.items[]` (attributeDescription.name + extractAttributeValues)
 * - `crossupsells[]` → `crossupsellsFrom` / `crossupsellsTo`
 */

const LANG = 'NL';

function getName(product: Product): string {
  return getLocalizedValue((product as any)?.names, LANG) || '';
}

function getShortName(product: Product): string {
  return getLocalizedValue((product as any)?.shortNames, LANG) || '';
}

function getSlug(product: Product): string {
  return getLocalizedValue((product as any)?.slugs, LANG) || '';
}

function getPrice(product: Product): AgnosticPrice {
  return {
    regular: (product as any)?.price?.net ?? 0,
  };
}

function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  const images: AgnosticMediaGalleryItem[] = [];
  const galleryItems = (product as any)?.media?.images?.items || [];

  for (const galleryItem of galleryItems) {
    const variants = galleryItem.imageVariants || [];
    const byName = (name: string) =>
      variants.find((image: any) => image.name === name)?.url;
    images.push({
      small: byName('small') || variants[0]?.url,
      normal: byName('normal') || variants[0]?.url,
      big: byName('big') || variants[0]?.url,
    } as AgnosticMediaGalleryItem);
  }

  return images;
}

function getCoverImage(product: Product): string {
  return getProductImageUrl(product as any) || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  return products;
}

/**
 * Maps a v2 AttributeResult to the AgnosticAttribute shape the storefront reads
 * (`{ name, value, label }`). `value` is the first extracted value (the
 * storefront does `getAttributes(...)[0].value`).
 */
const formatAttributeList = (items: any[]): AgnosticAttribute[] =>
  (items || []).map((attr: any) => {
    const values = extractAttributeValues(attr);
    return {
      name: attr?.attributeDescription?.name,
      value: values.join(',') ?? '',
      label: getLocalizedValue(attr?.attributeDescription?.descriptions, LANG) || '',
    };
  });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getAttributes(products, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  const isSingleProduct = !Array.isArray(products);
  const productList = isSingleProduct ? [products] : products;

  if (!products || productList.length === 0) {
    return {} as any;
  }

  const formatAttributes = (product: Product): AgnosticAttribute[] =>
    formatAttributeList((product as any)?.attributes?.items || []).filter((attribute: AgnosticAttribute) =>
      filterByAttributeName ? filterByAttributeName.includes(attribute.name) : attribute
    );

  const reduceToUniques = (prev, curr) => {
    const isAttributeExist = prev.some((el) => el.name === curr.name && el.value === curr.value);
    return isAttributeExist ? prev : [...prev, curr];
  };

  return productList
    .map((product) => formatAttributes(product))
    .reduce((prev, curr) => [...prev, ...curr], [])
    .reduce(reduceToUniques, []);
}

function getDescription(product: Product): string {
  return getLocalizedValue((product as any)?.descriptions, LANG) || '';
}

function getShortDescription(product: Product): string {
  return getLocalizedValue((product as any)?.shortDescriptions, LANG) || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

function getId(product: Product): string {
  return (product as any)?.productId?.toString() || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

function getStatus(product: Product): string {
  return (product as any)?.status || '';
}

function getBundleProducts(product: Product): any[] {
  return (product as any)?.bundles || [];
}

/**
 * v2 splits crossupsells into `crossupsellsFrom` / `crossupsellsTo`. The
 * storefront passes types like ['RELATED']; merge both directions and filter by
 * the crossupsell type, preserving the v1 behaviour.
 */
function getCrossupsellProducts(product: Product, types?: string[]): any[] {
  const from = (product as any)?.crossupsellsFrom?.items || [];
  const to = (product as any)?.crossupsellsTo?.items || [];
  const all = [...from, ...to];
  return all.filter((crossupsell: any) =>
    types ? types.includes(crossupsell?.type) : crossupsell
  );
}

function getInventory(product: Product): number {
  return (product as any)?.inventory?.totalQuantity || 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getShortName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getShortDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating,
  getStatus,
  getBundleProducts,
  getCrossupsellProducts,
  getInventory,
};
