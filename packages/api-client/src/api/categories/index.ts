import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import categoriesQuery from './categories';
import { CategoriesInput } from '../../types/Inputs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params, customQuery?: CustomQuery) => {
  const variables: CategoriesInput = {
    categoryId: context.config.catalogueRoot,
  };

  const { category } = context.extendQuery(customQuery, {
    category: {
      query: categoriesQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.query({
      query: gql`
        ${category.query}
      `,
      variables: category.variables,
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
