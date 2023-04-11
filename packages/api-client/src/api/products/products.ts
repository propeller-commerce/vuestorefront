import gql from 'graphql-tag';
import { MediaImagesFragment, AttributeFragment, InventoryFragment, ProductPriceFragment } from '../../fragments';

export default gql`
  ${MediaImagesFragment}
  ${AttributeFragment}
  ${InventoryFragment}
  ${ProductPriceFragment}
  query products(
    $slug: String
    $offset: Int = 12
    $page: Int = 1
    $sort: [SortInput!]
    $textFilters: [TextFilterInput!]
    $attributeFilters: AttributeFilterInput
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
      products(offset: $offset, page: $page, sort: $sort, textFilters: $textFilters) {
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
          sku
          path
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
            language
            value
          }
          ... on Product {
            id
            classId
            shortName
            manufacturerCode
            eanCode
            manufacturer
            supplier
            supplierCode
            class
            status
            isOrderable
            mediaImages(search: { sort: ASC }) {
              ...MediaImages
            }
            price {
              ...ProductPrice
            }
            attributes(filter: $attributeFilters) {
              ...Attribute
            }
            inventory {
              ...Inventory
            }
          }
        }
      }
    }
  }
`;
