import gql from 'graphql-tag';

export const InventoryFragment = gql`
  fragment Inventory on ProductInventory {
    totalQuantity
  }
`;
