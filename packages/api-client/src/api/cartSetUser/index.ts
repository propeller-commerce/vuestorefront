import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import cartSetUserQuery from './cartSetUser';
import { CartSetUserInput } from '../../types/Inputs';
import { CartSetUserArguments } from '../../types/API';

export default async (
  context,
  params: CartSetUserArguments,
  customQuery?: CustomQuery
) => {
  const variables: CartSetUserInput = {
    input: {
      cartId: params.cartId,
      userId: params.userId,
    },
  };

  const { cartSetUser } = context.extendQuery(customQuery, {
    cartSetUser: {
      query: cartSetUserQuery,
      variables,
    },
  });

  try {
    return context.client.mutate({
      mutation: gql`
        ${cartSetUser.query}
      `,
      variables: cartSetUser.variables,
    });
  } catch (error) {
    console.log('Error setting cart user');
    console.log(error);
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
      console.log('Error setting cart user');
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
