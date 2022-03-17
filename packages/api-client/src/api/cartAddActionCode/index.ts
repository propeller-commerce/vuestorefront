import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartAddActionCodeQuery from './cartAddActionCode';
import { CartAddActionCodeInput } from '../../types/Inputs';
import { CartAddActionCodeArguments } from '../../types/API';

export default async (
  context,
  input: CartAddActionCodeArguments,
  customQuery?: CustomQuery
) => {
  const variables: CartAddActionCodeInput = {
    cartId: input.cartId,
    actionCode: input.actionCode,
    siteId: context.config.siteId,
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { cartAddActionCode } = context.extendQuery(customQuery, {
    cartAddActionCode: {
      query: cartAddActionCodeQuery,
      variables,
    },
  });

  try {
    return context.client.mutate({
      mutation: gql`
        ${cartAddActionCode.query}
      `,
      variables: cartAddActionCode.variables,
    });
  } catch (error) {
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
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
