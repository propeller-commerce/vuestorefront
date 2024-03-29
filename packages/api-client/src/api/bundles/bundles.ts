import gql from 'graphql-tag';
import { MediaImagesFragment, AttributeValueFragment, InventoryFragment } from '../../fragments';

export default gql`
  ${MediaImagesFragment}
  ${AttributeValueFragment}
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
        filters {
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
          slug(language: $language) {
            language
            value
          }
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
                  media {
                    images(search: { sort: ASC }){
                      ...MediaImages
                    }
                  }
                  attributeValues(filter: $attributeFilters) {
                    ...AttributeValue
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
