import gql from 'graphql-tag';
import {
  CartFragment,
  DeliveryAddressFragment,
  InvoiceAddressFragment,
} from '../../fragments';

export default gql`
  ${CartFragment}
  ${DeliveryAddressFragment}
  ${InvoiceAddressFragment}
  query cart(
    $cartId: String!
    $attributeFilters: AttributeFilterInput
    $siteId: Int!
    $language: String
  ) {
    cart(cartId: $cartId) {
      deliveryAddress {
        ...DeliveryAddress
      }
      invoiceAddress {
        ...InvoiceAddress
      }
      ...Cart
    }
  }
`;
