import {
  GraphQLClient,
  cartService,
  productService,
  categoryService,
} from '@propeller-commerce/propeller-sdk-v2';
import type { Settings } from './types/settings';

/**
 * The set of v2 SDK service bundles the api-client adapters delegate to.
 * Add more here as additional v1 api methods are ported.
 */
export type V2Services = {
  cart: ReturnType<typeof cartService>;
  product: ReturnType<typeof productService>;
  category: ReturnType<typeof categoryService>;
};

/**
 * Builds a v2 SDK GraphQLClient from the (v1-compatible) Settings the
 * storefront passes through `middleware.config.js`. Proxy mode is the default
 * so the API key never ships to the browser; the consuming app's server proxy
 * injects it. In `direct` mode the key is sent from the SDK itself.
 */
export function createV2Client(settings: Settings): GraphQLClient {
  // NOTE: pass `timeout` explicitly defaulted. The SDK applies its 30000ms
  // default via `{ timeout: 30000, ...config }`, but an explicit
  // `timeout: undefined` in `config` OVERWRITES that default with undefined,
  // which makes `setTimeout(abort, undefined)` fire on the next tick and abort
  // every request immediately ("GraphQL request timeout after undefinedms").
  return new GraphQLClient({
    endpoint: settings.api.endpoint,
    apiKey: settings.api.apiKey,
    orderEditorApiKey: settings.api.orderEditorApiKey,
    securityMode: settings.api.securityMode ?? 'proxy',
    clientId: settings.api.clientId,
    timeout: settings.api.timeout ?? 30000,
    defaultLanguage: settings.siteLanguage ?? 'NL',
  });
}

/** Builds the service bundle used by the api adapters. */
export function createV2Services(client: GraphQLClient): V2Services {
  return {
    cart: cartService(client),
    product: productService(client),
    category: categoryService(client),
  };
}
