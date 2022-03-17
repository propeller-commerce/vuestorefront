import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
} from '@vue-storefront/core';
import type {
  Product,
  Bundle,
  Crossupsell,
  CrossupsellTypes,
  Attribute,
} from '@propeller-commerce/propeller-api';

type ProductFilter = any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: Product): string {
  return product?.name?.[0].value || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShortName(product: Product): string {
  return product?.shortName || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: Product): string {
  return product?.slug?.[0].value || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: Product): AgnosticPrice {
  return {
    regular: product.price.net,
    // special: product.price.value,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  const images = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const galleryItem of product.images) {
    images.push({
      small: galleryItem.url,
      normal: galleryItem.url,
      big: galleryItem.url,
    });
  }

  return images;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: Product): string {
  return product.images?.[0]?.url || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  return products;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(
  products,
  filterByAttributeName?: string[]
): Record<string, AgnosticAttribute | string> {
  const isSingleProduct = !Array.isArray(products);
  const productList = isSingleProduct ? [products] : products;

  if (!products || !products?.attributes || productList.length === 0) {
    return {} as any;
  }

  const formatAttributes = (product: Product): AgnosticAttribute[] =>
    formatAttributeList(product.attributes).filter((attribute) =>
      filterByAttributeName
        ? filterByAttributeName.includes(attribute.name)
        : attribute
    );

  const reduceToUniques = (prev, curr) => {
    const isAttributeExist = prev.some(
      (el) => el.name === curr.name && el.value === curr.value
    );

    if (!isAttributeExist) {
      return [...prev, curr];
    }

    return prev;
  };

  return productList
    .map((product) => formatAttributes(product))
    .reduce((prev, curr) => [...prev, ...curr], [])
    .reduce(reduceToUniques, []);
}

const formatAttributeList = (attributes: Attribute[]): AgnosticAttribute[] =>
  attributes.map((attr) => {
    return {
      name: attr.name,
      value: attr.textValue?.[0].values.toString() || '',
      label: attr.description?.[0].value || '', // TODO: support for different types of attributes,
    };
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  return product?.description?.[0].value || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShortDescription(product: Product): string {
  return product?.shortDescription?.[0].value || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: Product): string {
  return product.classId.toString();
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStatus(product: Product): string {
  return product.status;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBundleProducts(product: Product): Bundle[] {
  return product?.bundles || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCrossupsellProducts(
  product: Product,
  types: CrossupsellTypes
): Crossupsell[] {
  return (
    product?.crossupsells?.filter((crossupsell) =>
      types ? types.includes(crossupsell.type) : crossupsell
    ) || []
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getInventory(product: Product): number {
  return product?.inventory?.totalQuantity || 0;
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
