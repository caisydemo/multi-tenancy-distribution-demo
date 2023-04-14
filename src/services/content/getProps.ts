import { IGenBlogArticle } from "../graphql/child/__generated/sdk";
import { childSDK } from "../graphql/child/getSdk";
import { getAllBlogArticleMerged } from "./getAllBlogArticleMerged";
import { getBlogArticleBySlug } from "./getBlogArticleBySlug";

export enum EPageType {
  Default = 1,
  Blog = 2,
  Index = 3,
  NotFound = 4,
}

export const getProps = async ({
  slug,
  pageType = EPageType.Default,
}: {
  slug?: string;
  pageType?: EPageType;
}) => {
  const navigationRequest = childSDK.Navigation();
  const footerRequest = childSDK.Footer();

  if (slug === undefined && pageType == EPageType.Index) {
    const Navigation = (await navigationRequest)?.Navigation;
    slug = Navigation?.homePage?.slug ?? undefined;
  }
  if (slug === undefined && pageType == EPageType.NotFound) {
    const Navigation = (await navigationRequest)?.Navigation;
    slug = Navigation?.notFoundPage?.slug ?? undefined;
  }

  if (slug === undefined) {
    return {
      is404: true,
      Navigation: (await navigationRequest)?.Navigation,
      Footer: (await footerRequest)?.Footer,
      BlogArticle: null,
      Page: null,
    };
  }

  const BlogArticle =
    pageType == EPageType.Blog ? await getBlogArticleBySlug(slug) : null;

  const Page =
    pageType != EPageType.Blog
      ? (await childSDK
          .allPageBySlug({ slug })
          .then((r) => r.allPage?.edges?.[0]?.node)) ?? null
      : null;

  const Navigation = (await navigationRequest)?.Navigation;

  const redirectHome = Page?.slug === Navigation?.homePage?.slug;

  // if the page has a component of blog article grid we will append all blog articles to that component
  let allBlogArticles: IGenBlogArticle[] | undefined = undefined;

  if (Page?.components?.find((c) => c?.__typename === "BlogArticleGrid")) {
    if (!allBlogArticles) {
      allBlogArticles = await getAllBlogArticleMerged();
    }

    Page.components = Page.components.map((c) => {
      if (c?.__typename === "BlogArticleGrid") {
        return {
          ...c,
          articles: allBlogArticles ?? [],
        };
      }
      return c;
    });
  }

  return {
    redirectHome,
    is404: BlogArticle === null && Page === null,
    Navigation,
    Footer: (await footerRequest)?.Footer,
    BlogArticle,
    Page,
  };
};
