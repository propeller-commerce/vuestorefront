import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartDeleteItemQuery from './cartDeleteItem';
import { CartDeleteItemInput } from '../../types/Inputs';
import { CartDeleteItemArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: CartDeleteItemArguments, customQuery?: CustomQuery) => {
  const variables: CartDeleteItemInput = {
    input: {
      cartId: params.cartId,
      itemId: params.itemId,
    },
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { cartDeleteItem } = context.extendQuery(customQuery, {
    cartDeleteItem: {
      query: cartDeleteItemQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.mutate({
      mutation: gql`
        ${cartDeleteItem.query}
      `,
      variables: cartDeleteItem.variables,
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
