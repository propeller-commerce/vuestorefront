import gql from 'graphql-tag';
import {
  ImageFragment,
  AttributeFragment,
  InventoryFragment,
  ProductPriceFragment,
} from '../../fragments';

export default gql`
  ${ImageFragment}
  ${AttributeFragment}
  ${InventoryFragment}
  ${ProductPriceFragment}
  query productDetails(
    $productId: Int!
    $attributeFilters: AttributeFilterInput
    $crossupsellTypesInput: CrossupsellTypesInput
    $siteId: Int!
    $language: String
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
      images(siteId: $siteId) {
        ...Image
      }
      price {
        ...ProductPrice
      }
      attributes(filter: { isPublic: true }) {
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
            images(siteId: $siteId) {
              ...Image
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
          images(siteId: $siteId) {
            ...Image
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
