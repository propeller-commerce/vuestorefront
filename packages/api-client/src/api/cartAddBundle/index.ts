import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartAddBundleQuery from './cartAddBundle';
import { CartAddBundleInput } from '../../types/Inputs';
import { CartAddBundleArguments } from '../../types/API';

export default async (
  context,
  params: CartAddBundleArguments,
  customQuery?: CustomQuery
) => {
  const variables: CartAddBundleInput = {
    input: {
      cartId: params.cartId,
      bundleId: params.bundleId,
      quantity: params.quantity,
    },
    siteId: context.config.siteId,
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
    return context.client.mutate({
      mutation: gql`
        ${cartAddBundle.query}
      `,
      variables: cartAddBundle.variables,
    });
  } catch (error) {
    console.log('Error adding bundle to cart');
    console.log(error);
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
      console.log('Error adding item to cart');
      console.log(error);
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
