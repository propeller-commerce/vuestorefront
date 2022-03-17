import gql from 'graphql-tag';
import {
  DeliveryAddressFragment,
  InvoiceAddressFragment,
} from '../../fragments';

export default gql`
  ${DeliveryAddressFragment}
  ${InvoiceAddressFragment}
  mutation cartUpdateAddress($input: CartUpdateAddressInput!) {
    cartUpdateAddress(input: $input) {
      cart {
        deliveryAddress {
          ...DeliveryAddress
        }
        invoiceAddress {
          ...InvoiceAddress
        }
      }
    }
  }
`;
