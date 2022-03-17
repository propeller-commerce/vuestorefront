import gql from 'graphql-tag';

export const ImageFragment = gql`
  fragment Image on Image {
    id
    imageId
    name
    url(fillColor: "white", method: fill, height: 800, width: 800)
    type
    order
  }
`;
