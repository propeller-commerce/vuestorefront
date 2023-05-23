import { AgnosticMediaGalleryItem, AgnosticAttribute, AgnosticPrice, ProductGetters } from '@vue-storefront/core';
import type { Product, Bundle, Crossupsell, CrossupsellTypes, AttributeValue } from '@propeller-commerce/propeller-api';

type ProductFilter = any;

function getName(product: Product): string {
  return product?.name?.[0].value || '';
}

function getShortName(product: Product): string {
  return product?.shortName || '';
}

function getSlug(product: Product): string {
  return product?.slug?.[0].value || '';
}

function getPrice(product: Product): AgnosticPrice {
  return {
    regular: product.price.net,
    // special: product.price.value,
  };
}

function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  const images = [];
  const imageVariants = product?.media?.images?.items || [];

  for (const galleryItem of imageVariants) {
    images.push({
      small: galleryItem.imageVariants.find((image) => image.name === 'small').url,
      normal: galleryItem.imageVariants.find((image) => image.name === 'normal').url,
      big: galleryItem.imageVariants.find((image) => image.name === 'big').url,
    });
  }

  return images;
}

function getCoverImage(product: Product): string {
  return product.media?.images?.items?.[0]?.imageVariants?.[0]?.url || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  return products;
}

const formatAttributeList = (attributes: AttributeValue[]): AgnosticAttribute[] =>
  attributes.map((attr: AttributeValue) => {
    const [firstTextValue] = attr?.textValue ?? [];

    return {
      name: attr.attributeDescription.name,
      value: firstTextValue?.values?.toString() ?? '',
      // TODO: support for different types of attributes,
      label: attr.attributeDescription?.[0].value || '',
    };
  });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getAttributes(products, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  const isSingleProduct = !Array.isArray(products);
  const productList = isSingleProduct ? [products] : products;

  if (!products || !products?.attributeValues || productList.length === 0) {
    return {} as any;
  }

  const formatAttributes = (product: Product): AgnosticAttribute[] =>
    formatAttributeList(product.attributeValues.items).filter((attribute: AgnosticAttribute) =>
      filterByAttributeName ? filterByAttributeName.includes(attribute.name) : attribute
    );

  const reduceToUniques = (prev, curr) => {
    const isAttributeExist = prev.some((el) => el.name === curr.name && el.value === curr.value);

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

function getDescription(product: Product): string {
  return product?.description?.[0].value || '';
}

function getShortDescription(product: Product): string {
  return product?.shortDescription?.[0].value || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

function getId(product: Product): string {
  return product.productId.toString();
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
  return product.status;
}

function getBundleProducts(product: Product): Bundle[] {
  return product?.bundles || [];
}

function getCrossupsellProducts(product: Product, types: CrossupsellTypes): Crossupsell[] {
  return product?.crossupsells?.filter((crossupsell:Crossupsell) => (types ? types.includes(crossupsell.type) : crossupsell))
    .map((crossupsell:Crossupsell) => {

      // Add additional properties from the product object to the item
      // used in RelatedProducts.vue
      const additionalProperties = {
        media: product.media,
        price: product.price,
        productId: crossupsell.productId
      };

      return {
        ...crossupsell,
        item: {
          ...crossupsell.item,
          ...additionalProperties
        }
      };
    }) || [];
}

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
