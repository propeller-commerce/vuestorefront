import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartDeleteItem($input: CartDeleteItemInput!, $attributeFilters: AttributeFilterInput, $language: String) {
    cartDeleteItem(input: $input) {
      cart {
        ...Cart
      }
    }
  }
`;
