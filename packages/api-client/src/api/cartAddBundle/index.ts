import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartAddBundleQuery from './cartAddBundle';
import { CartAddBundleInput } from '../../types/Inputs';
import { CartAddBundleArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: CartAddBundleArguments, customQuery?: CustomQuery) => {
  const variables: CartAddBundleInput = {
    input: {
      cartId: params.cartId,
      bundleId: params.bundleId,
      quantity: params.quantity,
    },
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { cartAddBundle } = context.extendQuery(customQuery, {
    cartAddBundle: {
      query: cartAddBundleQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.mutate({
      mutation: gql`
        ${cartAddBundle.query}
      `,
      variables: cartAddBundle.variables,
    });
  } catch (error) {
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors.length > 0) {
      Logger.debug(error);

      return {
        ...error,
        errors: error.graphQLErrors,
        data: null,
      };
    }
    Logger.error(error);
    throw error.networkError?.result || error;
  }
};
