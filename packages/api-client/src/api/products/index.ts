import gql from 'graphql-tag';
import productsQuery from './products';
import { CustomQuery } from '@vue-storefront/core';
import { ProductsInput } from '../../types/Inputs';
import { ProductsArguments } from '../../types/API';

export default async (
  context,
  params: ProductsArguments,
  customQuery?: CustomQuery
) => {
  const variables: ProductsInput = {
    slug: params.categorySlug,
    offset: params.offset <= 0 ? 12 : params.offset,
    page: params.page <= 0 ? 1 : params.page,
    siteId: context.config.siteId,
    language: context.config?.siteLanguage || 'NL',
  };

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
    return await context.client.query({
      query: gql`
        ${products.query}
      `,
      variables: products.variables,
    });
  } catch (error) {
    console.log('ERROR');
    console.log(error);
    throw (
      error.graphQLErrors?.[0].message || error.networkError?.result || error
    );
  }
};
