import gql from 'graphql-tag';
import { MediaImagesFragment, AttributeFragment, InventoryFragment, ProductPriceFragment } from '../../fragments';

export default gql`
  ${MediaImagesFragment}
  ${AttributeFragment}
  ${InventoryFragment}
  ${ProductPriceFragment}
  query bundle($bundleId: Float!, $language: String, $attributesPage: Int, $attributesOffset: Int) {
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
          id
          classId
          categoryId
          sku
          shortName
          eanCode
          manufacturer
          manufacturerCode
          supplier
          supplierCode
          taxCode
          status
          isOrderable
          unit
          name(language: $language) {
            language
            value
          }
          slug(language: $language) {
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
          price {
            ...ProductPrice
          }
          attributes(filter: { isPublic: true, page: $attributesPage, offset: $attributesOffset }) {
            ...Attribute
          }
          inventory {
            ...Inventory
          }
          mediaImages(search: { sort: ASC }) {
            ...MediaImages
          }
        }
      }
    }
  }
`;
