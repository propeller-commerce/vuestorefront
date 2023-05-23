import gql from 'graphql-tag';
import { MediaImagesFragment, AttributeValueFragment, InventoryFragment, ProductPriceFragment } from '../../fragments';

export default gql`
  ${MediaImagesFragment}
  ${AttributeValueFragment}
  ${InventoryFragment}
  ${ProductPriceFragment}
  query productDetails(
    $productId: Int!
    $attributeFilters: AttributeFilterInput
    $crossupsellTypesInput: CrossupsellTypesInput
    $language: String
    $attributesPage: Int
    $attributesOffset: Int
  ) {
    product(id: $productId) {
      id
      productId
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
        value
        language
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
      media {
        images(search: { sort: ASC }){
          ...MediaImages
        }
      }
      price {
        ...ProductPrice
      }
      attributeValues(filter: { isPublic: true, page: $attributesPage, offset: $attributesOffset }) {
        ...AttributeValue
      }
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
            name {
              language
              value
            }
            inventory {
              totalQuantity
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
      crossupsells(input: $crossupsellTypesInput) {
        type
        subtype
        item {
          id
          categoryId
          language
          defaultLanguage
          sku
          name(language: $language) {
            value
            language
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
        }
      }
      inventory {
        ...Inventory
      }
    }
  }
`;
