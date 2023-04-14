import { childSDK } from "../graphql/child/getSdk";
import { rootSDK } from "../graphql/root/getSdk";

export const getBlogArticleBySlug = async (slug: string) => {
  const [childRespose, rootReponse] = await Promise.all([
    childSDK.allBlogArticleBySlug({ slug }),
    rootSDK.allBlogArticleBySlug({ slug }),
  ]);

  return (
    childRespose.allBlogArticle?.edges?.[0]?.node ??
    rootReponse.allBlogArticle?.edges?.[0]?.node ??
    null
  );
};
