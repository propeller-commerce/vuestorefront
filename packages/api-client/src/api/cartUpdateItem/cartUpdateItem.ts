import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartUpdateItem(
    $input: CartUpdateItemInput!
    $attributeFilters: AttributeFilterInput
    $siteId: Int!
    $language: String
  ) {
    cartUpdateItem(input: $input) {
      cart {
        ...Cart
      }
    }
  }
`;
