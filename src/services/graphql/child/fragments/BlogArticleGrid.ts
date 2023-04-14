import { gql } from "graphql-request";

export const f_BlogArticleGrid = gql`
  fragment BlogArticleGrid on BlogArticleGrid {
    id
    headline
    subheadline
  }
`;
