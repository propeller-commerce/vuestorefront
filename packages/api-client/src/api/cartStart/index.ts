import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartStartQuery from './cartStart';
import { CartStartInput } from '../../types/Inputs';

export default async (context, params, customQuery?: CustomQuery) => {
  const variables: CartStartInput = {
    siteId: context.config.siteId,
  };

  const { cartStart } = context.extendQuery(customQuery, {
    cartStart: {
      query: cartStartQuery,
      variables,
    },
  });
  try {
    return context.client.mutate({
      mutation: gql`
        ${cartStart.query}
      `,
      variables: cartStart.variables,
    });
  } catch (error) {
    console.log('Error starting cart');
    console.log(error);
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
      console.log('Error starting cart');
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
