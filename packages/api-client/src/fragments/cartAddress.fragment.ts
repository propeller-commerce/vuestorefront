import gql from 'graphql-tag';

export const DeliveryAddressFragment = gql`
  fragment DeliveryAddress on CartAddress {
    company
    gender
    firstName
    lastName
    middleName
    street
    number
    numberExtension
    postalCode
    city
    country
    region
    phone
    email
  }
`;

export const InvoiceAddressFragment = gql`
  fragment InvoiceAddress on CartAddress {
    company
    gender
    firstName
    lastName
    middleName
    street
    number
    numberExtension
    postalCode
    city
    country
    region
    phone
    email
  }
`;
