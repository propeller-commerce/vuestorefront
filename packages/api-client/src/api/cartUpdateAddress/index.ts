import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartUpdateAddressQuery from './cartUpdateAddress';
import { CartUpdateAddressInput } from '../../types/Inputs';
import { CartUpdateAddressArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: CartUpdateAddressArguments, customQuery?: CustomQuery) => {
  const variables: CartUpdateAddressInput = {
    input: {
      ...params,
    },
  };

  const { cartUpdateAddress } = context.extendQuery(customQuery, {
    cartUpdateAddress: {
      query: cartUpdateAddressQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.mutate({
      mutation: gql`
        ${cartUpdateAddress.query}
      `,
      variables: cartUpdateAddress.variables,
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
