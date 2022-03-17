import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartProcessQuery from './cartProcess';
import { CartProcessInput } from '../../types/Inputs';
import { CartProcessArguments } from '../../types/API';

export default async (
  context,
  params: CartProcessArguments,
  customQuery?: CustomQuery
) => {
  const variables: CartProcessInput = {
    input: {
      cartId: params.cartId,
      orderStatus: 'UNFINISHED',
    },
  };

  const { cartProcess } = context.extendQuery(customQuery, {
    cartProcess: {
      query: cartProcessQuery,
      variables,
    },
  });

  try {
    return context.client.mutate({
      mutation: gql`
        ${cartProcess.query}
      `,
      variables: cartProcess.variables,
    });
  } catch (error) {
    console.log('Error processing cart');
    console.log(error);
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
      console.log('Error processing cart');
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
