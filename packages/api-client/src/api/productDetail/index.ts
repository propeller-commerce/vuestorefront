import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import productQuery from './product';
import { ProductInput } from '../../types/Inputs';
import { ProductDetailArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: ProductDetailArguments, customQuery?: CustomQuery) => {
  const variables: ProductInput & {
    attributesPage: number;
    attributesOffset: number;
  } = {
    productId: parseInt(params.id),
    attributeFilters: {
      name: [],
      isPublic: true,
    },
    language: context.config?.siteLanguage || 'NL',
    attributesPage: customQuery?.attributesPage ? parseInt(customQuery.attributesPage, 10) : 1,
    attributesOffset: customQuery?.attributesOffset ? parseInt(customQuery.attributesOffset, 10) : 50,
  };

  if (context.config.productListAttributes) variables.attributeFilters.name = context.config.productListAttributes;

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
    // wihout 'await' it never reaches the catch block
    return await context.client.query({
      query: gql`
        ${product.query}
      `,
      variables: product.variables,
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
