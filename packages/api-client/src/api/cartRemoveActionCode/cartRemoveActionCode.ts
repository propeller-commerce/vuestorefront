import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartRemoveActionCode(
    $cartId: String!
    $actionCode: String!
    $attributeFilters: AttributeFilterInput
    $siteId: Int!
    $language: String
  ) {
    cartRemoveActionCode(cartId: $cartId, actionCode: $actionCode) {
      cart {
        ...Cart
      }
    }
  }
`;
