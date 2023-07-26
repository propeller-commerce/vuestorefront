import gql from 'graphql-tag';
import { Logger, CustomQuery } from '@vue-storefront/core';
import bundleQuery from './bundle';
import { BundleDetailArguments } from '../../types/API';
import { BundleDetailInput } from '../../types/Inputs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (context, params: BundleDetailArguments, customQuery?: CustomQuery) => {
  const variables: BundleDetailInput & {
    attributesPage: number;
    attributesOffset: number;
  } = {
    bundleId: parseInt(params.bundleId),
    language: context.config?.siteLanguage || 'NL',
    attributesPage: customQuery?.attributesPage ? parseInt(customQuery.attributesPage, 10) : 1,
    attributesOffset: customQuery?.attributesOffset ? parseInt(customQuery.attributesOffset, 10) : 50,
  };

  if (context.config.productListAttributes)
    variables.attributeFilters = {
      name: context.config.productListAttributes,
    };

  const { bundle } = context.extendQuery(customQuery, {
    bundle: {
      query: bundleQuery,
      variables,
    },
  });

  try {
    // wihout 'await' it never reaches the catch block
    return await context.client.query({
      query: gql`
        ${bundle.query}
      `,
      variables: bundle.variables,
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
