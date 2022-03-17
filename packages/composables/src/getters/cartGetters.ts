import {
  CartGetters,
  AgnosticPrice,
  AgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute,
} from '@vue-storefront/core';
import type {
  Cart,
  CartBaseItem,
  CartTaxLevel,
} from '@propeller-commerce/propeller-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(cart: Cart): any {
  return cart?.items || [{}];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: CartBaseItem): string {
  return item.product.name[0].value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item: CartBaseItem): string {
  return item.product.images?.[0]?.url || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: CartBaseItem): AgnosticPrice {
  return {
    regular: item.priceNet,
    // special: 10,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: CartBaseItem): number {
  return item.quantity;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(
  item: CartBaseItem,
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
  return {
    total: cart.total.totalNet,
    subtotal: cart.total.subTotalNet,
    special: cart.total.subTotalNet,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAppliedTaxLevels(cart: Cart): CartTaxLevel[] {
  return cart?.taxLevels;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(cart: Cart): number {
  return cart?.postageData?.postageNet || 0;
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
      value: cart.total.discountNet,
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
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getAppliedCoupon,
  getDiscounts,
};
