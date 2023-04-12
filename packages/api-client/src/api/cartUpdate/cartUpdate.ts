import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartUpdate($input: CartUpdateInput!, $attributeFilters: AttributeFilterInput, $language: String) {
    cartUpdate(input: $input) {
      cart {
        ...Cart
      }
    }
  }
`;
