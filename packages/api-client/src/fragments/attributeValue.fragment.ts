import gql from 'graphql-tag';

export const AttributeValueFragment = gql`
  fragment AttributeValue on AttributeValue {
    items: {
      attributeId
      textValue
      attributeDescription {
        name
        searchId
        description {
          value
          language
        }
      }
    }
  }
`;
