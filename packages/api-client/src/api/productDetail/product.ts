import gql from 'graphql-tag';
import { MediaImagesFragment, AttributeFragment, InventoryFragment, ProductPriceFragment } from '../../fragments';

export default gql`
  ${MediaImagesFragment}
  ${AttributeFragment}
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
      mediaImages(search: { sort: ASC }) {
        ...MediaImages
      }
      price {
        ...ProductPrice
      }
      attributes(filter: { isPublic: true, page: $attributesPage, offset: $attributesOffset }) {
        ...Attribute
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
            mediaImages(search: { sort: ASC }) {
              ...MediaImages
            }
            attributes(filter: $attributeFilters) {
              ...Attribute
            }
          }
        }
      }
      crossupsells(input: $crossupsellTypesInput) {
        type
        subtype
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
          price {
            ...ProductPrice
          }
          mediaImages(search: { sort: ASC }) {
            ...MediaImages
          }
          attributes(filter: $attributeFilters) {
            ...Attribute
          }
        }
      }
      inventory {
        ...Inventory
      }
    }
  }
`;
