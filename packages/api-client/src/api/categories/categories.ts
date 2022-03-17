import gql from 'graphql-tag';

export default gql`
  query categories($categoryId: Float, $language: String) {
    category(id: $categoryId) {
      name(language: $language) {
        value
        language
      }
      slug(language: $language) {
        value
        language
      }
      categories {
        name(language: $language) {
          value
          language
        }
        slug(language: $language) {
          value
          language
        }
        categories {
          name(language: $language) {
            value
            language
          }
          slug(language: $language) {
            value
            language
          }
        }
      }
    }
  }
`;
