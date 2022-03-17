import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import productQuery from './product';
import { ProductInput } from '../../types/Inputs';
import { ProductDetailArguments } from '../../types/API';

export default async (
  context,
  params: ProductDetailArguments,
  customQuery?: CustomQuery
) => {
  const variables: ProductInput = {
    productId: parseInt(params.id),
    attributeFilters: {
      name: [],
      isPublic: true,
    },
    siteId: context.config.siteId,
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters.name = context.config.productListAttributes;

  if (context.config.crossupsellTypes)
    variables.crossupsellTypesInput = {
      input: { types: context.config.crossupsellTypes },
    };

  const { product } = context.extendQuery(customQuery, {
    product: {
      query: productQuery,
      variables,
    },
  });

  try {
    return context.client.query({
      query: gql`
        ${product.query}
      `,
      variables: product.variables,
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
