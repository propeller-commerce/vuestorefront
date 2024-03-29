import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartAddItemQuery from './cartAddItem';
import { CartAddItemInput } from '../../types/Inputs';
import { CartAddItemArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: CartAddItemArguments, customQuery?: CustomQuery) => {
  const variables: CartAddItemInput = {
    input: {
      cartId: params.cartId,
      productId: params.productId,
      quantity: params.quantity,
    },
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { cartAddItem } = context.extendQuery(customQuery, {
    cartAddItem: {
      query: cartAddItemQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.mutate({
      mutation: gql`
        ${cartAddItem.query}
      `,
      variables: cartAddItem.variables,
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
