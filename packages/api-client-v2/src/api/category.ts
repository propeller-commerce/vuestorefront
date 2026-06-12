import { ApiContext, V1Envelope, adapt } from './context';

const lang = (ctx: ApiContext) => ctx.config.siteLanguage ?? 'NL';

/**
 * v1 `categories(context)` → `{ data: { category } }`.
 * Uses the configured catalogue root (v1 `catalogueRoot`; for v2 the base
 * category id is supplied via the same config key).
 */
export async function categories(
  ctx: ApiContext
): Promise<V1Envelope<{ category: unknown }>> {
  const env = await adapt(() =>
    ctx.services.category.getCategory({
      categoryId: ctx.config.catalogueRoot,
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { category: env.data }, errors: env.errors }
    : (env as any);
}
