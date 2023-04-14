import { IGenBlogArticle } from "../../graphql/child/__generated/sdk";
import { childSDK } from "../../graphql/child/getSdk";

export interface GetAllBlogArticles {
  after?: string;
  arr?: IGenBlogArticle[];
}

export const getAllBlogArticle = async (
  { after, arr = [] } = {} as GetAllBlogArticles
): Promise<IGenBlogArticle[]> => {
  const { allBlogArticle } = await childSDK.allBlogArticle({ after });

  allBlogArticle?.edges?.forEach((edge) => {
    edge?.node && arr.push(edge.node);
  });

  if (allBlogArticle?.pageInfo?.hasNextPage) {
    return await getAllBlogArticle({
      after: allBlogArticle?.pageInfo?.endCursor ?? undefined,
      arr,
    });
  }

  return arr as IGenBlogArticle[];
};
