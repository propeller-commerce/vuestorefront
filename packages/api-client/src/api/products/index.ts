import gql from 'graphql-tag';
import productsQuery from './products';
import { Logger, CustomQuery } from '@vue-storefront/core';
import { ProductsInput } from '../../types/Inputs';
import { ProductsArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: ProductsArguments, customQuery?: CustomQuery) => {
  const variables: ProductsInput & {
    attributesPage: number;
    attributesOffset: number
  } = {
    slug: params.categorySlug,
    offset: params.offset <= 0 ? 12 : params.offset,
    page: params.page <= 0 ? 1 : params.page,
    language: context.config?.siteLanguage || 'NL',
    attributesPage: customQuery?.attributesPage ? parseInt(customQuery.attributesPage, 10) : 1,
    attributesOffset: customQuery?.attributesOffset ? parseInt(customQuery.attributesOffset, 10) : 50,
  };
  // make attributesPage and atrributesOffset part of variable.attributeFilters ?

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  if (params.textFilters) variables.textFilters = params.textFilters;

  if (params.sort) variables.sort = params.sort;

  const { products } = context.extendQuery(customQuery, {
    products: {
      query: productsQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.query({
      query: gql`
        ${products.query}
      `,
      variables: products.variables,
    });
  } catch (error) {
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
