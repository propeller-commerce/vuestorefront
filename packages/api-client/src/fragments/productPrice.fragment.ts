import gql from 'graphql-tag';

export const ProductPriceFragment = gql`
  fragment ProductPrice on ProductPrice {
    gross
    net
    quantity
    discount {
      discountId
      formula
      type
      quantity
      value
      validFrom
      validTo
    }
    taxCode
    type
  }
`;
