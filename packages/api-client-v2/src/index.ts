/**
 * Public type surface of the v2 api-client.
 *
 * Re-exports the SDK's domain types (Cart, Product, ProductsResponse, the v2
 * input types, etc.) so the composables-v2 package can import them from here —
 * mirroring how v1 composables imported types from
 * `@propeller-commerce/propeller-api`.
 */
export * from './types/settings';
export type {
  Cart,
  CartMainItem,
  CartBaseItem,
  CartTotal,
  CartTaxLevel,
  CartAddress,
  Product,
  ProductsResponse,
  ProductSearchInput,
  ProductTextFilterInput,
  ProductSortInput,
  CartAddItemInput,
  CartAddBundleInput,
  Order,
} from '@propeller-commerce/propeller-sdk-v2';

/**
 * v1-era VSF type names the composables package still references in its
 * (unused-by-the-storefront) stub getters/composables — useCategory, useUser,
 * useWishlist, useReview, useStore, useShippingProvider, userBilling/shipping,
 * etc. These domains aren't part of the storefront's v1 usage surface, so we
 * alias them to `any` to keep the package compiling without re-implementing
 * stubs the storefront never imports. Port them properly if/when a feature
 * starts using them.
 */
export type Category = any;
export type CategorySearchCriteria = any;
export type User = any;
export type Wishlist = any;
export type WishlistItem = any;
export type Store = any;
export type Review = any;
export type ReviewItem = any;
export type ReviewSearchCriteria = any;
export type ShippingProvider = any;
export type ShippingMethod = any;
export type PasswordResetResult = any;
export type OrderItem = any;
export type UserBillingAddress = any;
export type UserBillingAddressItem = any;
export type UserBillingAddressSearchCriteria = any;
export type UserShippingAddress = any;
export type UserShippingAddressItem = any;
export type UserShippingAddressSearchCriteria = any;
export type Bundle = any;
export type Crossupsell = any;
export type CrossupsellTypes = string[];
export type AttributeValue = any;
