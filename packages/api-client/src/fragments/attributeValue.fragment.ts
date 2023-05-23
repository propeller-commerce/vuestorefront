import gql from 'graphql-tag';

export const AttributeValueFragment = gql`
  fragment AttributeValue on AttributeValueResponse {
    items {
      attributeId
      textValue (language: $language) {
        language
        values
      }
      attributeDescription{
        name
        searchId
        description {
          value
          language
        }
      }
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
`;
