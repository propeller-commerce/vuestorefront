import gql from 'graphql-tag';
import bundlesQuery from './bundles';
import { CustomQuery } from '@vue-storefront/core';
import { ProductsInput, YesNo } from '../../types/Inputs';
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

  variables.hasBundle = YesNo['Y'];
  variables.isBundleLeader = YesNo['Y'];

  const { bundles } = context.extendQuery(customQuery, {
    bundles: {
      query: bundlesQuery,
      variables,
    },
  });

  try {
    return await context.client.query({
      query: gql`
        ${bundles.query}
      `,
      variables: bundles.variables,
    });
  } catch (error) {
    throw (
      error.graphQLErrors?.[0].message || error.networkError?.result || error
    );
  }
};
