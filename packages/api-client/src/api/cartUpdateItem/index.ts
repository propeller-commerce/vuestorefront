import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartUpdateItemQuery from './cartUpdateItem';
import { CartUpdateItemInput } from '../../types/Inputs';
import { CartUpdateItemArguments } from '../../types/API';

export default async (
  context,
  params: CartUpdateItemArguments,
  customQuery?: CustomQuery
) => {
  const variables: CartUpdateItemInput = {
    input: {
      cartId: params.cartId,
      quantity: params.quantity,
      itemId: params.itemId,
    },
    siteId: context.config.siteId,
    language: context.config?.siteLanguage || 'NL',
  };

  if (params.notes) variables.input.notes = params.notes;

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { cartUpdateItem } = context.extendQuery(customQuery, {
    cartUpdateItem: {
      query: cartUpdateItemQuery,
      variables,
    },
  });

  try {
    return context.client.mutate({
      mutation: gql`
        ${cartUpdateItem.query}
      `,
      variables: cartUpdateItem.variables,
    });
  } catch (error) {
    console.log('Error updating cart item');
    console.log(error);
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
      console.log('Error updating cart item');
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
