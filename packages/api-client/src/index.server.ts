import { apiClientFactory } from '@vue-storefront/core';
import * as api from './api';
// import type { Endpoints } from './types';
import type { Settings } from './types/settings';
import fetch from 'cross-fetch';
import { onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/core';

const createErrorHandler = () =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        if (!locations) {
          console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`);
          return;
        }

        const parsedLocations = locations.map(
          ({ column, line }) => `[column: ${column}, line: ${line}]`
        );

        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${parsedLocations.join(
            ', '
          )}, Path: ${path}`
        );
        return;
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

function onCreate(settings: Settings) {
  const httpLink = createHttpLink({
    uri: settings.api.endpoint,
    fetch,
    headers: {
      apiKey: settings.api.apiKey,
    },
  });

  const onErrorLink = createErrorHandler();

  const link: ApolloLink = ApolloLink.from([onErrorLink, httpLink]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
      addTypename: true,
    }),
    ssrMode: true,
    defaultOptions: {
      query: {
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });

  return {
    config: settings,
    client,
    cookies: settings.cookies,
  };
}

const { createApiClient } = apiClientFactory<Settings, any>({
  onCreate,
  api,
});

export { createApiClient };
