import type {
  Product,
  ProductsResponse,
  ProductSearchInput,
} from '@propeller-commerce/propeller-sdk-v2';
import { ApiContext, V1Envelope, adapt } from './context';

/**
 * Product / search api adapters — v1-shaped over the v2 SDK ProductService.
 *
 * The v1 layer exposed `productDetail`, `bundleDetail`, `products`, `bundles`.
 * In v2 these all collapse onto `getProduct` / `getProducts`. The richer
 * v1→v2 query mapping (categorySlug → categoryId/path, filters → textFilters,
 * sort → sortInputs) lives in composables-v2's useFacet; here we keep the
 * adapters thin and accept an already-built `ProductSearchInput` for lists.
 */

const lang = (ctx: ApiContext) => ctx.config.siteLanguage ?? 'NL';

/** v1 `productDetail(context, { id })` → `{ data: { product } }` */
export async function productDetail(
  ctx: ApiContext,
  params: { id: number | string }
): Promise<V1Envelope<{ product: Product }>> {
  const env = await adapt(() =>
    ctx.services.product.getProduct({
      productId: Number(params.id),
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { product: env.data }, errors: env.errors }
    : (env as any);
}

/** v1 `bundleDetail(context, { bundleId })` → `{ data: { bundle } }` */
export async function bundleDetail(
  ctx: ApiContext,
  params: { bundleId: number | string }
): Promise<V1Envelope<{ bundle: unknown }>> {
  // In v2 a bundle is reached via its leader product's `bundles[]`. Resolve the
  // product, then surface the matching bundle under the v1 `bundle` field.
  const env = await adapt(() =>
    ctx.services.product.getProduct({
      productId: Number(params.bundleId),
      language: lang(ctx),
    } as any)
  );
  if (!env.data) return env as any;
  const product: any = env.data;
  const bundle = Array.isArray(product?.bundles) ? product.bundles[0] : product;
  return { data: { bundle }, errors: env.errors };
}

/**
 * v1 `products(context, input)` → `{ data: { products } }`.
 * `input` is a fully-formed v2 ProductSearchInput (built by useFacet).
 */
export async function products(
  ctx: ApiContext,
  input: ProductSearchInput
): Promise<V1Envelope<{ products: ProductsResponse }>> {
  const env = await adapt(() =>
    ctx.services.product.getProducts({
      input: { language: lang(ctx), ...input },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { products: env.data }, errors: env.errors }
    : (env as any);
}

/**
 * v1 `bundles(context, input)` → `{ data: { products } }`.
 * Same as `products` but constrained to bundle leaders.
 */
export async function bundles(
  ctx: ApiContext,
  input: ProductSearchInput
): Promise<V1Envelope<{ products: ProductsResponse }>> {
  const env = await adapt(() =>
    ctx.services.product.getProducts({
      input: {
        language: lang(ctx),
        ...input,
        hasBundle: 'Y' as any,
        isBundleLeader: 'Y' as any,
      },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { products: env.data }, errors: env.errors }
    : (env as any);
}
