import { gql } from "graphql-request";

export const q_allBlogArticle = gql`
  query allBlogArticle($after: String) {
    allBlogArticle(after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          _meta {
            publishedAt
          }
          id
          slug
          teaserDesciption
          teaserHeadline
          teaserImage {
            ...Asset
          }
          text {
            connections {
              __typename
              ...Asset
            }
            json
          }
        }
      }
    }
  }
`;
