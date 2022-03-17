import gql from 'graphql-tag';

export default gql`
  mutation cartStart($siteId: Int!) {
    cartStart(siteId: $siteId) {
      cartId
    }
  }
`;
