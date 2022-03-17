import gql from 'graphql-tag';

export default gql`
  mutation cartProcess($input: CartProcessInput!) {
    cartProcess(input: $input) {
      cartOrderId
    }
  }
`;
