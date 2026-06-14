/**
 * The v1-shaped api surface, re-exported as named functions.
 *
 * VSF's apiClientFactory binds these so consumers call
 * `context.$propeller.api.<name>(params)`. The names and return envelopes match
 * the v1 `@propeller-commerce/propeller-api` package; the bodies delegate to the
 * v2 SDK (see ./cart, ./product, ./category).
 */
export {
  cart,
  cartStart,
  cartAddItem,
  cartAddBundle,
  cartUpdateItem,
  cartDeleteItem,
  cartUpdate,
  cartUpdateAddress,
  cartAddActionCode,
  cartRemoveActionCode,
  cartProcess,
} from './cart';

export {
  productDetail,
  bundleDetail,
  products,
  bundles,
} from './product';

export { categories } from './category';
