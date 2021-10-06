import { gql } from '@apollo/client';

export const getSection = gql`
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      name
      content
      order
      createdAt
      updatedAt
    }
  }
`;
export const listSections = gql`
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content {
          ... on About {
            __typename
            body
            portrait
          }
          ... on Skills {
            __typename
            skills
          }
          ... on SocialMedia {
            __typename
            email
            github
            linkedin
            twitter
          }
          ... on Experience {
            __typename
            jobs {
              bullets
              date
              title
            }
          }
        }
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
