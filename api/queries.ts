/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import { gql, useQuery } from '@apollo/client';

export const getSection = gql`
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      name
      content
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
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
