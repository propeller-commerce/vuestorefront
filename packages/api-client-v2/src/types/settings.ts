/**
 * Configuration accepted by the v2 api-client.
 *
 * It is a superset of the v1 `@propeller-commerce/propeller-api` `Settings`
 * shape so that the consuming storefront's `middleware.config.js` keeps working
 * with minimal change: the same `api.endpoint` / `api.apiKey` /
 * `cookies.cartCookieName` / `siteId` / `siteLanguage` / `catalogueRoot` /
 * `productListAttributes` keys are honoured. The v2-only keys
 * (`api.orderEditorApiKey`, `api.securityMode`, `api.clientId`) are optional.
 */
type ApiSettings = {
  /** GraphQL endpoint (direct v2 endpoint, or a server proxy path). */
  endpoint: string;
  /** General API key. In `proxy` security mode the proxy injects it server-side. */
  apiKey: string;
  /** Privileged key for order-editor-gated mutations (v2 dual-key model). */
  orderEditorApiKey?: string;
  /** 'proxy' keeps keys server-side (recommended); 'direct' sends them from the client. */
  securityMode?: 'proxy' | 'direct';
  /** Optional client id, sent as X-Client-ID, used by a proxy to route key selection. */
  clientId?: string;
  /** Request timeout (ms). */
  timeout?: number;
};

type CookieSettings = {
  cartCookieName: string;
};

export type Settings = {
  api: ApiSettings;
  cookies: CookieSettings;
  /** Channel/site identifier (v1 `siteId`). */
  siteId?: number;
  /** Default language for localized content (v1 `siteLanguage`, e.g. 'NL'). */
  siteLanguage?: string;
  /** Root category id for catalogue queries (v1 `catalogueRoot`). */
  catalogueRoot?: number;
  /** Attribute names to request alongside product lists (v1 `productListAttributes`). */
  productListAttributes?: string[];
};
