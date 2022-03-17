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
  query bundle(
    $bundleId: Float!
    $attributeFilters: AttributeFilterInput
    $siteId: Int!
    $language: String
  ) {
    bundle(bundleId: $bundleId) {
      id
      comboId
      name
      description
      discount
      condition
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
          name {
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
`;
