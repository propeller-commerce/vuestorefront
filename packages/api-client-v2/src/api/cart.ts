import type { Cart } from '@propeller-commerce/propeller-sdk-v2';
import { ApiContext, V1Envelope, adapt } from './context';

/**
 * Cart api adapters — v1-shaped signatures over the v2 SDK CartService.
 *
 * Each function preserves the v1 `@propeller-commerce/propeller-api` calling
 * convention `(context, params)` and the v1 return envelope
 * `{ data: { <operationName>: ... } }` so the composables-v2 layer can stay a
 * near-verbatim copy of v1. Internally each maps v1 params onto the v2 variable
 * shape and delegates to the SDK service.
 */

const lang = (ctx: ApiContext) => ctx.config.siteLanguage ?? 'NL';

/** v1 `cart(context, cartId)` → `{ data: { cart } }` */
export async function cart(
  ctx: ApiContext,
  cartId: string
): Promise<V1Envelope<{ cart: Cart }>> {
  const env = await adapt(() =>
    ctx.services.cart.getCart({ cartId, language: lang(ctx) } as any)
  );
  return env.data ? { data: { cart: env.data }, errors: env.errors } : (env as any);
}

/** v1 `cartStart(context)` → `{ data: { cartStart: { cartId } } }` */
export async function cartStart(
  ctx: ApiContext
): Promise<V1Envelope<{ cartStart: Cart }>> {
  const env = await adapt(() =>
    ctx.services.cart.startCart({ input: {}, language: lang(ctx) } as any)
  );
  return env.data
    ? { data: { cartStart: env.data }, errors: env.errors }
    : (env as any);
}

/** v1 `cartAddItem(context, { cartId, productId, quantity })` */
export async function cartAddItem(
  ctx: ApiContext,
  params: { cartId: string; productId: number; quantity: number }
): Promise<V1Envelope<{ cartAddItem: { cart: Cart } }>> {
  const env = await adapt(() =>
    ctx.services.cart.addItemToCart({
      id: params.cartId,
      input: { productId: params.productId, quantity: params.quantity },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartAddItem: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartAddBundle(context, { cartId, bundleId, quantity })` */
export async function cartAddBundle(
  ctx: ApiContext,
  params: { cartId: string; bundleId: string; quantity: number }
): Promise<V1Envelope<{ cartAddBundle: { cart: Cart } }>> {
  const env = await adapt(() =>
    ctx.services.cart.addBundleToCart({
      id: params.cartId,
      input: { bundleId: params.bundleId, quantity: params.quantity },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartAddBundle: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartUpdateItem(context, { cartId, itemId, quantity })` */
export async function cartUpdateItem(
  ctx: ApiContext,
  params: { cartId: string; itemId: string; quantity: number }
): Promise<V1Envelope<{ cartUpdateItem: { cart: Cart } }>> {
  const env = await adapt(() =>
    ctx.services.cart.updateCartItem({
      id: params.cartId,
      itemId: params.itemId,
      input: { quantity: params.quantity },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartUpdateItem: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartDeleteItem(context, { cartId, itemId })` */
export async function cartDeleteItem(
  ctx: ApiContext,
  params: { cartId: string; itemId: string }
): Promise<V1Envelope<{ cartDeleteItem: { cart: Cart } }>> {
  const env = await adapt(() =>
    ctx.services.cart.deleteCartItem({
      id: params.cartId,
      input: { itemId: params.itemId },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartDeleteItem: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartUpdate(context, { cartId, paymentData?, postageData?, notes?, reference? })` */
export async function cartUpdate(
  ctx: ApiContext,
  params: {
    cartId: string;
    paymentData?: unknown;
    postageData?: unknown;
    notes?: string;
    reference?: string;
  }
): Promise<V1Envelope<{ cartUpdate: { cart: Cart } }>> {
  const input: Record<string, unknown> = {};
  if (params.paymentData) input.paymentData = params.paymentData;
  if (params.postageData) input.postageData = params.postageData;
  if (params.notes) input.notes = params.notes;
  if (params.reference) input.reference = params.reference;

  const env = await adapt(() =>
    ctx.services.cart.updateCart({
      id: params.cartId,
      input,
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartUpdate: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartUpdateAddress(context, { cartId, type, ...address })` */
export async function cartUpdateAddress(
  ctx: ApiContext,
  params: { cartId: string; type: 'invoice' | 'delivery'; [k: string]: unknown }
): Promise<V1Envelope<{ cartUpdateAddress: { cart: Cart } }>> {
  const { cartId, ...rest } = params;
  const env = await adapt(() =>
    ctx.services.cart.updateCartAddress({
      id: cartId,
      input: rest,
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartUpdateAddress: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartAddActionCode(context, { cartId, actionCode })` */
export async function cartAddActionCode(
  ctx: ApiContext,
  params: { cartId: string; actionCode: string }
): Promise<V1Envelope<{ cartAddActionCode: { cart: Cart } }>> {
  const env = await adapt(() =>
    ctx.services.cart.addActionCodeToCart({
      id: params.cartId,
      input: { actionCode: params.actionCode },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartAddActionCode: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartRemoveActionCode(context, { cartId, actionCode })` */
export async function cartRemoveActionCode(
  ctx: ApiContext,
  params: { cartId: string; actionCode: string }
): Promise<V1Envelope<{ cartRemoveActionCode: { cart: Cart } }>> {
  const env = await adapt(() =>
    ctx.services.cart.removeActionCodeFromCart({
      id: params.cartId,
      input: { actionCode: params.actionCode },
      language: lang(ctx),
    } as any)
  );
  return env.data
    ? { data: { cartRemoveActionCode: { cart: env.data } }, errors: env.errors }
    : (env as any);
}

/** v1 `cartProcess(context, { cartId })` → `{ data: { cartProcess: { cartOrderId } } }` */
export async function cartProcess(
  ctx: ApiContext,
  params: { cartId: string }
): Promise<V1Envelope<{ cartProcess: { cartOrderId: unknown } }>> {
  const env = await adapt(() =>
    ctx.services.cart.processCart({ id: params.cartId } as any)
  );
  // v2 processCart returns a CartProcessResponse; expose its order id under the
  // v1 field name `cartOrderId` (composables read data.cartProcess.cartOrderId).
  if (!env.data) return env as any;
  const res: any = env.data;
  return {
    data: { cartProcess: { cartOrderId: res.cartOrderId ?? res.orderId ?? res } },
    errors: env.errors,
  };
}
