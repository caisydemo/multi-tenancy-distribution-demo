import { getAllBlogArticleMeta as getAllBlogArticleMetaFromChild } from "./child/getAllBlogArticleMeta";
import { getAllBlogArticleMeta as getAllBlogArticleMetaFromRoot } from "./root/getAllBlogArticleMeta";

export type BlogArticleMeta = {
  __typename?: "BlogArticle";
  id?: string | null;
  slug?: string | null;
  _meta?: {
    publishedAt?: any | null;
  } | null;
};

export const getAllBlogArticleMetaMerged = async (): Promise<
  BlogArticleMeta[]
> => {
  const [childArticles, rootArticles] = await Promise.all([
    getAllBlogArticleMetaFromChild(),
    getAllBlogArticleMetaFromRoot(),
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

  return arr as BlogArticleMeta[];
};
