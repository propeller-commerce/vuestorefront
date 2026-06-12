import { apiClientFactory } from '@vue-storefront/core';
import * as api from './api';
import type { Settings } from './types/settings';
import { createV2Client, createV2Services } from './client';

/**
 * Builds the per-request context for the v2 api-client.
 *
 * Unlike the v1 client (which created an Apollo client here), this builds the
 * v2 SDK `GraphQLClient` and the service bundle. The bundle is exposed on the
 * context as `services`, which the api adapters in ./api consume. `config` is
 * the (v1-compatible) Settings object passed from the storefront's
 * `middleware.config.js`.
 */
function onCreate(settings: Settings) {
  const client = createV2Client(settings);
  const services = createV2Services(client);

  return {
    config: settings,
    client,
    services,
    cookies: settings.cookies,
  };
}

const { createApiClient } = apiClientFactory<Settings, typeof api>({
  onCreate,
  api,
});

export { createApiClient };
