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

/**
 * The v2 product-listing query (`getProducts` → SDK `ProductGridFields`) does
 * NOT return per-product `attributes` — only names/slugs/price/media/status.
 * The v1 listing did surface the attributes the storefront grid reads
 * (brand / education-type). To keep the grid behaviour identical we re-attach
 * those attributes here: for each listed product fetch only the configured
 * `productListAttributes` via `getAttributeResultByProductId` (one narrow call
 * per product, run in parallel) and shape the result into the
 * `product.attributes.items[]` form `productGetters.getAttributes` expects.
 *
 * Note: there is no batch variant — `getAttributeResultByProductId` keys off
 * its positional `productId`; the input's `productIds[]` is ignored. With a
 * page of ~12 products this is ~12 small parallel requests.
 */
async function enrichWithAttributes(
  ctx: ApiContext,
  response: ProductsResponse | undefined
): Promise<void> {
  const names = ctx.config.productListAttributes;
  if (!names || names.length === 0) return;
  const items: any[] = (response as any)?.items || [];
  if (items.length === 0) return;

  await Promise.all(
    items.map(async (product: any) => {
      const productId = product?.productId;
      if (!productId) return;
      // Skip if the product already carries attributes (e.g. a Cluster's
      // defaultProduct that came through a richer query).
      if (product?.attributes?.items?.length) return;
      try {
        const result = await ctx.services.product.getAttributeResultByProductId(
          Number(productId),
          {
            page: 1,
            offset: Math.max(names.length, 50),
            attributeDescription: { names },
            includeDefaultValues: false,
          } as any
        );
        product.attributes = { items: (result as any)?.items || [] };
      } catch {
        // Attribute enrichment is best-effort: a failure here must not blank
        // out an otherwise-valid product listing.
        product.attributes = { items: [] };
      }
    })
  );
}

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
  if (env.data) await enrichWithAttributes(ctx, env.data as any);
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
  if (env.data) await enrichWithAttributes(ctx, env.data as any);
  return env.data
    ? { data: { products: env.data }, errors: env.errors }
    : (env as any);
}
