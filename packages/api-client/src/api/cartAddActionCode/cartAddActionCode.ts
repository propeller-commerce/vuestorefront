import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartAddActionCode(
    $cartId: String!
    $actionCode: String!
    $attributeFilters: AttributeFilterInput
    $siteId: Int!
    $language: String
  ) {
    cartAddActionCode(cartId: $cartId, actionCode: $actionCode) {
      cart {
        ...Cart
      }
    }
  }
`;
