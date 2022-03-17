import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartAddItem(
    $input: CartAddItemInput!
    $attributeFilters: AttributeFilterInput
    $siteId: Int!
    $language: String
  ) {
    cartAddItem(input: $input) {
      cart {
        ...Cart
      }
    }
  }
`;
