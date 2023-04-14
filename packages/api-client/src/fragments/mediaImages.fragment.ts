import gql from 'graphql-tag';

export const MediaImagesFragment = gql`
  fragment MediaImages on PaginatedMediaImageResponse {
    items {
      alt {
        value
      }
      tags {
        values
      }
      imageVariants(
        input: {
          transformations: [
            { name: "small", transformation: { width: 400, height: 400, fit: BOUNDS, format: WEBP } }
            { name: "normal", transformation: { width: 600, height: 600, fit: BOUNDS, format: WEBP } }
            { name: "big", transformation: { width: 800, height: 800, fit: BOUNDS, format: WEBP } }
          ]
        }
      ) {
        name
        url
      }
    }
  }
`;
