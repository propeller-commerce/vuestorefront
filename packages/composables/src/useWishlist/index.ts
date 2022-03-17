/* istanbul ignore file */
import {
  Context,
  useWishlistFactory,
  UseWishlistFactoryParams,
} from '@vue-storefront/core';
import type {
  Wishlist,
  WishlistItem,
  Product,
} from '@propeller-commerce/propeller-api';

const params: UseWishlistFactoryParams<Wishlist, WishlistItem, Product> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentWishlist, product }) => {
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentWishlist, product }) => {
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentWishlist }) => {
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context: Context, { currentWishlist, product }) => {
    return false;
  },
};

export const useWishlist = useWishlistFactory<Wishlist, WishlistItem, Product>(
  params
);
