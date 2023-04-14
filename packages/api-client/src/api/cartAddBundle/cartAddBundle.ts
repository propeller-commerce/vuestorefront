import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  mutation cartAddBundle($input: CartAddBundleInput!, $attributeFilters: AttributeFilterInput, $language: String) {
    cartAddBundle(input: $input) {
      cart {
        ...Cart
      }
    }
  }
`;
