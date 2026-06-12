/* eslint-disable indent */
import {
  CartGetters,
  AgnosticPrice,
  AgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute,
} from '@vue-storefront/core';
import type { Cart, CartBaseItem, CartTaxLevel } from '@propeller-commerce/propeller-api-v2';
import { getLocalizedValue, getProductImageUrl } from '@propeller-commerce/propeller-v2-core-ui';

// v2 cart line items expose a localized `product.names[]` (v1 was `name[0].value`).
const LANG = 'NL';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(cart: Cart): any {
  return cart?.items || [{}];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: CartBaseItem): string {
  return getLocalizedValue((item as any)?.product?.names, LANG) || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item: CartBaseItem): string {
  return getProductImageUrl((item as any)?.product) || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: CartBaseItem): AgnosticPrice {
  return {
    regular: item.priceNet,
    special: item.totalPriceNet / item.discount,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: CartBaseItem): number {
  return item.quantity;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// TODO: add proper type
function getItemDiscount(item: CartBaseItem): any {
  return {
    discount: item.discount,
    percentage: item.discountPercentage,
  };
}

function getItemAttributes(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  item: CartBaseItem,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filterByAttributeName?: Array<string>
): Record<string, AgnosticAttribute | string> {
  return {
    color: 'red',
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: CartBaseItem): string {
  return item.product.sku;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(cart: Cart): AgnosticTotals {
  const total = (cart as any)?.total || {};
  return {
    total: total.totalNet ?? 0,
    subtotal: total.subTotalNet ?? 0,
    special: total.subTotalNet ?? 0,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAppliedTaxLevels(cart: Cart): CartTaxLevel[] {
  return cart?.taxLevels;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(cart: Cart): number {
  // v2 renamed v1 `postageData.postageNet` → `postageData.priceNet`.
  return (cart as any)?.postageData?.priceNet || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems(cart: Cart): number {
  return cart?.items?.length || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoupons(cart: Cart): AgnosticCoupon[] {
  return [];
}

function getAppliedCoupon(cart: Cart): AgnosticCoupon | null {
  return cart?.actionCode
    ? {
        id: cart.actionCode,
        name: cart.actionCode,
        value: 0,
        code: cart.actionCode,
      }
    : null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscounts(cart: Cart): AgnosticDiscount[] {
  return [
    {
      id: 'discount',
      name: 'discount',
      description: 'discount',
      value: (cart as any)?.total?.discountNet ?? 0,
    },
  ];
}

export const cartGetters: CartGetters<Cart, CartBaseItem> = {
  getTotals,
  getAppliedTaxLevels,
  getShippingPrice,
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemDiscount,
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getAppliedCoupon,
  getDiscounts,
};
