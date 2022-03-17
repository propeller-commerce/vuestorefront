import {
  Context,
  useCartFactory,
  UseCartFactoryParams,
} from '@vue-storefront/core';
import type {
  Cart,
  CartBaseItem as CartItem,
  Product,
  CartAddItemInput,
  CartAddBundleInput,
} from '@propeller-commerce/propeller-api';

// TODO - merge bundle and product
type ProductTemp = any;

const params: UseCartFactoryParams<Cart, CartItem, ProductTemp> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    // TODO: temp
    // get this from settings
    // TODO: store cart in store
    const cartCookieName = 'propeller-vsf-cart';

    const existngCartId =
      context.$propeller.config.app.cookies.get(cartCookieName);

    if (!existngCartId) return {};

    const cart = await context.$propeller.api.cart(existngCartId);

    return cart?.data?.cart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (
    context: Context,
    { currentCart, product, quantity, customQuery }
  ) => {
    // TODO: temp
    // get this from settings
    const cartCookieName = 'propeller-vsf-cart';

    // check if cart is already initiated
    let existngCartId =
      context.$propeller.config.app.cookies.get(cartCookieName);

    if (!existngCartId) {
      // initiate cart
      const { data } = await context.$propeller.api.cartStart();
      existngCartId = data.cartStart.cartId;
      context.$propeller.config.app.cookies.set(cartCookieName, existngCartId, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
      });

      // check if user is already loged in, if so, add user to cart
    }

    // add bundle to cart
    if (product.bundleId) {
      const cartAddBundleInput = {
        cartId: existngCartId,
        bundleId: product.bundleId,
        quantity,
      };

      const cart = await context.$propeller.api.cartAddBundle(
        cartAddBundleInput
      );

      // eslint-disable-next-line consistent-return
      return cart.data.cartAddBundle.cart as unknown as Cart;
    } else {
      const cartAddItemInput = {
        cartId: existngCartId,
        productId: product.classId,
        quantity,
      };

      const cart = await context.$propeller.api.cartAddItem(cartAddItemInput);

      // eslint-disable-next-line consistent-return
      return cart.data.cartAddItem.cart as unknown as Cart;
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (
    context: Context,
    { currentCart, product, customQuery }
  ) => {
    const cartDeleteItemInput = {
      cartId: currentCart.cartId,
      itemId: product.id,
    };

    const { data } = await context.$propeller.api.cartDeleteItem(
      cartDeleteItemInput
    );

    return data.cartDeleteItem.cart as unknown as Cart;
  },

  // TODO: add type cartUpdateItemInput
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (
    context: Context,
    { currentCart, product, quantity, customQuery }
  ) => {
    const cartUpdateItemInput = {
      cartId: currentCart.cartId,
      itemId: product.id,
      quantity,
    };

    const { data } = await context.$propeller.api.cartUpdateItem(
      cartUpdateItemInput
    );

    return data.cartUpdateItem.cart as unknown as Cart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    // TODO: temp
    // get this from settings
    const cartCookieName = 'propeller-vsf-cart';
    context.$propeller.config.app.cookies.remove(cartCookieName);
    return {} as unknown as Cart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    const cartAddActionCodeInput = {
      cartId: currentCart.cartId,
      actionCode: couponCode,
    };

    const { data } = await context.$propeller.api.cartAddActionCode(
      cartAddActionCodeInput
    );

    return {
      updatedCart: data.cartAddActionCode.cart as unknown as Cart,
      updatedCoupon: { code: couponCode },
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    const cartRemoveActionCodeInput = {
      cartId: currentCart.cartId,
      actionCode: currentCart.actionCode,
    };

    const { data } = await context.$propeller.api.cartRemoveActionCode(
      cartRemoveActionCodeInput
    );

    return {
      updatedCart: data.cartRemoveActionCode.cart as unknown as Cart,
      updatedCoupon: { code: '' },
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) =>
    !!currentCart?.items?.find(
      (cartItem) => cartItem.productId === product.classId
    ),
};

export const useCart = useCartFactory<Cart, CartItem, Product>(params);
