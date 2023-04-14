import { IGenBlogArticle } from "../graphql/child/__generated/sdk";
import { getAllBlogArticle as getAllBlogArticleFromChild } from "./child/getAllBlogArticle";
import { getAllBlogArticle as getAllBlogArticleFromRoot } from "./root/getAllBlogArticle";

export const getAllBlogArticleMerged = async (): Promise<IGenBlogArticle[]> => {
  const [childArticles, rootArticles] = await Promise.all([
    getAllBlogArticleFromChild(),
    getAllBlogArticleFromRoot(),
  ]);

  // filter out duplicates in rootArticles
  // and sort by publsihed at data
  const arr = [
    ...childArticles,
    ...rootArticles.filter((rootArticle) => {
      return !childArticles.find(
        (childArticle) => childArticle.slug === rootArticle.slug
      );
    }),
  ].sort((a, b) => {
    return (
      new Date(b._meta?.publishedAt).getTime() -
      new Date(a._meta?.publishedAt).getTime()
    );
  });

  return arr as IGenBlogArticle[];
};
