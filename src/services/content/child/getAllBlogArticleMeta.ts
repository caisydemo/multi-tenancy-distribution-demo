import { childSDK } from "../../graphql/child/getSdk";

export type BlogArticleMeta = {
  __typename?: "BlogArticle";
  id?: string | null;
  slug?: string | null;
  _meta?: {
    __typename?: "CaisyDocument_Meta";
    publishedAt?: any | null;
  } | null;
};

export interface GetAllBlogArticles {
  after?: string;
  arr?: BlogArticleMeta[];
}

export const getAllBlogArticleMeta = async (
  { after, arr = [] } = {} as GetAllBlogArticles
): Promise<BlogArticleMeta[]> => {
  const { allBlogArticle } = await childSDK.allBlogArticleMeta({ after });

  allBlogArticle?.edges?.forEach((edge) => {
    edge?.node && arr.push(edge.node);
  });

  if (allBlogArticle?.pageInfo?.hasNextPage) {
    return await getAllBlogArticleMeta({
      after: allBlogArticle?.pageInfo?.endCursor ?? undefined,
      arr,
    });
  }

  return arr as BlogArticleMeta[];
};
