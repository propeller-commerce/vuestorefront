import gql from 'graphql-tag';

export const AttributeFragment = gql`
  fragment Attribute on Attribute {
    searchId
    name
    description(language: $language) {
      value
      language
    }
    textValue(language: $language) {
      values
      language
    }
  }
`;
