import gql from 'graphql-tag';
import bundlesQuery from './bundles';
import { Logger, CustomQuery } from '@vue-storefront/core';
import { ProductsInput, YesNo } from '../../types/Inputs';
import { ProductsArguments } from '../../types/API';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: ProductsArguments, customQuery?: CustomQuery) => {
  const variables: ProductsInput = {
    slug: params.categorySlug,
    offset: params.offset <= 0 ? 12 : params.offset,
    page: params.page <= 0 ? 1 : params.page,
    language: context.config?.siteLanguage || 'NL',
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  if (params.textFilters) variables.textFilters = params.textFilters;

  if (params.sort) variables.sort = params.sort;

  variables.hasBundle = YesNo.Y;
  variables.isBundleLeader = YesNo.Y;

  const { bundles } = context.extendQuery(customQuery, {
    bundles: {
      query: bundlesQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.query({
      query: gql`
        ${bundles.query}
      `,
      variables: bundles.variables,
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
