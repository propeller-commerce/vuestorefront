import gql from 'graphql-tag';

export default gql`
  mutation cartSetUser($input: CartSetUserInput!) {
    cartSetUser(input: $input) {
      cart {
        cartId
        userId
      }
    }
  }
`;
