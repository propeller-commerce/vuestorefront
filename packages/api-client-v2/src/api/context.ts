import type { Settings } from '../types/settings';
import type { V2Services } from '../client';

/**
 * The context object every api adapter receives. Created in `onCreate`
 * (index.server.ts) and threaded through by VSF's apiClientFactory.
 *
 * It deliberately mirrors the parts of the v1 Apollo-based context the old
 * adapters used (`config`), but swaps the Apollo `client` for the v2 SDK
 * `services` bundle.
 */
export type ApiContext = {
  config: Settings;
  services: V2Services;
};

/**
 * v1 adapters returned an Apollo-style `{ data, errors }` envelope and the
 * composables read `result.data.<op>...`. The v2 SDK services throw on error
 * and return bare domain objects, so we re-wrap into the same envelope to keep
 * the composables-v2 layer a near-verbatim copy of v1.
 */
export type V1Envelope<T> = {
  data: T | null;
  errors?: unknown[];
};

/** Wrap a successful v2 result in the v1 `{ data }` envelope. */
export function ok<T>(data: T): V1Envelope<T> {
  return { data };
}

/**
 * Run a v2 service call and adapt thrown errors into the v1 non-throwing
 * `{ data: null, errors }` envelope (v1 only threw on network errors).
 */
export async function adapt<T>(fn: () => Promise<T>): Promise<V1Envelope<T>> {
  try {
    return ok(await fn());
  } catch (error: any) {
    // The SDK throws GraphQLOperationError with an `errors` array for
    // GraphQL-level errors; surface those the way v1 did instead of a 500.
    if (error?.errors?.length) {
      return { data: null, errors: error.errors };
    }
    throw error;
  }
}
