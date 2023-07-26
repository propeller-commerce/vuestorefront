import gql from 'graphql-tag';
import { Logger, CustomQuery, Context } from '@vue-storefront/core';
import cartAddActionCodeQuery from './cartAddActionCode';
import { CartAddActionCodeInput } from '../../types/Inputs';
import { CartAddActionCodeArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context: Context, input: CartAddActionCodeArguments, customQuery?: CustomQuery) => {
  const variables: CartAddActionCodeInput = {
    cartId: input.cartId,
    actionCode: input.actionCode,
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
    // wihout 'await' it never reaches the catch block
    return await context.client.mutate({
      mutation: gql`
        ${cartAddActionCode.query}
      `,
      variables: cartAddActionCode.variables,
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
