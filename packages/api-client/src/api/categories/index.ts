import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import categoriesQuery from './categories';
import { CategoriesInput } from '../../types/Inputs';

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
    return await context.client.query({
      query: gql`
        ${category.query}
      `,
      variables: category.variables,
    });
  } catch (error) {
    // For error in data we don't throw 500, because it's not server error
    if (error.graphQLErrors) {
      console.log('Error in categories');
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
