import gql from 'graphql-tag';
import {
  ImageFragment,
  AttributeFragment,
  InventoryFragment,
} from '../../fragments';

export default gql`
  ${ImageFragment}
  ${AttributeFragment}
  ${InventoryFragment}
  query products(
    $slug: String
    $offset: Int = 12
    $page: Int = 1
    $sort: [SortInput!]
    $textFilters: [TextFilterInput!]
    $attributeFilters: AttributeFilterInput
    $hasBundle: YesNo
    $isBundleLeader: YesNo
    $siteId: Int!
    $language: String
  ) {
    category(slug: $slug) {
      id
      categoryId
      name(language: $language) {
        value
        language
      }
      description(language: $language) {
        value
        language
      }
      shortDescription(language: $language) {
        value
        language
      }
      slug(language: $language) {
        value
        language
      }
      products(
        offset: $offset
        page: $page
        sort: $sort
        textFilters: $textFilters
        hasBundle: $hasBundle
        isBundleLeader: $isBundleLeader
      ) {
        itemsFound
        offset
        page
        pages
        start
        end
        availableAttributes {
          id
          isSearchable
          description
          type
          textFilter {
            value
            count
          }
        }
        items {
          ... on Product {
            bundles {
              id
              comboId
              name
              description
              condition
              discount
              price {
                net
                gross
                originalNet
                originalGross
              }
              items {
                isLeader
                productId
                price {
                  net
                  gross
                  originalNet
                  originalGross
                }
                product {
                  isOrderable
                  name(language: $language) {
                    language
                    value
                  }
                  inventory {
                    ...Inventory
                  }
                  images(siteId: $siteId) {
                    ...Image
                  }
                  attributes(filter: $attributeFilters) {
                    ...Attribute
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
