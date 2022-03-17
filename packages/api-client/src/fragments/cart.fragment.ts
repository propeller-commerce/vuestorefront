import gql from 'graphql-tag';
import { ImageFragment } from './image.fragment';
import { AttributeFragment } from './attribute.fragment';

export const CartFragment = gql`
  ${ImageFragment}
  ${AttributeFragment}
  fragment Cart on Cart {
    cartId
    userId
    actionCode
    total {
      subTotal
      subTotalNet
      discountPercentage
      totalNet
      totalGross
      discountNet
      discountGross
    }
    taxLevels {
      price
      taxCode
    }
    postageData {
      shippingMethod
      postageTaxPercentage
      postage
      postageNet
    }
    items {
      id
      productId
      price
      priceNet
      totalPrice
      totalPriceNet
      quantity
      product {
        sku
        status
        isOrderable
        name(language: $language) {
          language
          value
        }
        shortName
        slug(language: $language) {
          language
          value
        }
        images(siteId: $siteId) {
          ...Image
        }
        attributes(filter: $attributeFilters) {
          ...Attribute
        }
        inventory {
          totalQuantity
        }
      }
      bundle {
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
    }
  }
`;
