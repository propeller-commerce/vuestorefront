import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartRemoveActionCodeQuery from './cartRemoveActionCode';
import { CartRemoveActionCodeInput } from '../../types/Inputs';
import { CartRemoveActionCodeArguments } from '../../types/API';

export default async (
  context,
  input: CartRemoveActionCodeArguments,
  customQuery?: CustomQuery
) => {
  const variables: CartRemoveActionCodeInput = {
    cartId: input.cartId,
    actionCode: input.actionCode,
    siteId: context.config.siteId,
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { cartRemoveActionCode } = context.extendQuery(customQuery, {
    cartRemoveActionCode: {
      query: cartRemoveActionCodeQuery,
      variables,
    },
  });

  try {
    return context.client.mutate({
      mutation: gql`
        ${cartRemoveActionCode.query}
      `,
      variables: cartRemoveActionCode.variables,
    });
  } catch (error) {
    console.log('Error adding item to cart');
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
