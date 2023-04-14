import { DocumentNode } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type IGenAsset = {
  __typename?: "Asset";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars["String"]>;
  copyright?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dominantColor?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  keywords?: Maybe<Scalars["String"]>;
  originType?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type IGenAsset_Connection = {
  __typename?: "Asset_Connection";
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenAsset_ConnectionEdge = {
  __typename?: "Asset_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_CreateInput = {
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenAsset_UpdateInput = {
  author?: InputMaybe<Scalars["String"]>;
  copyright?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dominantColor?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  originType?: InputMaybe<Scalars["String"]>;
  originalName?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenAuthor = {
  __typename?: "Author";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  avatar?: Maybe<IGenAsset>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};

export type IGenAuthorAvatarArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenAuthor_Connection = {
  __typename?: "Author_Connection";
  edges?: Maybe<Array<Maybe<IGenAuthor_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenAuthor_ConnectionEdge = {
  __typename?: "Author_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenAuthor>;
};

export type IGenAuthor_CreateInput = {
  avatar?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

export type IGenAuthor_Sort = {
  avatar?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  role?: InputMaybe<IGenOrder>;
};

export type IGenAuthor_UpdateInput = {
  avatar?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

export type IGenAuthor_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAuthor_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAuthor_Where>>>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  role?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBlogArticle = {
  __typename?: "BlogArticle";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<IGenAuthor>;
  category?: Maybe<IGenCategory>;
  id?: Maybe<Scalars["ID"]>;
  seo?: Maybe<IGenSeoInformation>;
  slug?: Maybe<Scalars["String"]>;
  teaserDesciption?: Maybe<Scalars["String"]>;
  teaserHeadline?: Maybe<Scalars["String"]>;
  teaserImage?: Maybe<IGenAsset>;
  text?: Maybe<IGenBlogArticle_Text>;
};

export type IGenBlogArticleAuthorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenBlogArticleCategoryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenBlogArticleSeoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenBlogArticleTeaserImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenBlogArticleTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenBlogArticle_Connection = {
  __typename?: "BlogArticle_Connection";
  edges?: Maybe<Array<Maybe<IGenBlogArticle_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenBlogArticle_ConnectionEdge = {
  __typename?: "BlogArticle_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenBlogArticle>;
};

export type IGenBlogArticle_CreateInput = {
  author?: InputMaybe<Scalars["ID"]>;
  category?: InputMaybe<Scalars["ID"]>;
  seo?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  teaserDesciption?: InputMaybe<Scalars["String"]>;
  teaserHeadline?: InputMaybe<Scalars["String"]>;
  teaserImage?: InputMaybe<Scalars["ID"]>;
  text?: InputMaybe<Scalars["JSON"]>;
};

export type IGenBlogArticle_Sort = {
  author?: InputMaybe<IGenOrder>;
  category?: InputMaybe<IGenOrder>;
  seo?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  teaserDesciption?: InputMaybe<IGenOrder>;
  teaserHeadline?: InputMaybe<IGenOrder>;
  teaserImage?: InputMaybe<IGenOrder>;
};

export type IGenBlogArticle_UpdateInput = {
  author?: InputMaybe<Scalars["ID"]>;
  category?: InputMaybe<Scalars["ID"]>;
  seo?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  teaserDesciption?: InputMaybe<Scalars["String"]>;
  teaserHeadline?: InputMaybe<Scalars["String"]>;
  teaserImage?: InputMaybe<Scalars["ID"]>;
  text?: InputMaybe<Scalars["JSON"]>;
};

export type IGenBlogArticle_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  teaserDesciption?: InputMaybe<IGenCaisyField_String_Where>;
  teaserHeadline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenBlogArticle_Text = {
  __typename?: "BlogArticle_text";
  connections?: Maybe<Array<Maybe<IGenBlogArticle_Text_Connections>>>;
  json?: Maybe<Scalars["JSON"]>;
};

export type IGenBlogArticle_TextConnectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenBlogArticle_Text_Connections = IGenAsset;

export type IGenCaisyDocument_Meta = {
  __typename?: "CaisyDocument_Meta";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  locale?: Maybe<Scalars["String"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type IGenCaisyField_Color_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename?: "Caisy_Field_Document_NotFound";
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
};

export type IGenCategory = {
  __typename?: "Category";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type IGenCategory_Connection = {
  __typename?: "Category_Connection";
  edges?: Maybe<Array<Maybe<IGenCategory_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenCategory_ConnectionEdge = {
  __typename?: "Category_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenCategory>;
};

export type IGenCategory_CreateInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type IGenCategory_Sort = {
  name?: InputMaybe<IGenOrder>;
};

export type IGenCategory_UpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type IGenCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCategory_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenCategory_Where>>>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenMutation = {
  __typename?: "Mutation";
  createAsset?: Maybe<IGenAsset>;
  createAuthor?: Maybe<IGenAuthor>;
  createBlogArticle?: Maybe<IGenBlogArticle>;
  createCategory?: Maybe<IGenCategory>;
  createPage?: Maybe<IGenPage>;
  createSeoInformation?: Maybe<IGenSeoInformation>;
  deleteAsset?: Maybe<Scalars["Boolean"]>;
  deleteAuthor?: Maybe<Scalars["Boolean"]>;
  deleteBlogArticle?: Maybe<Scalars["Boolean"]>;
  deleteCategory?: Maybe<Scalars["Boolean"]>;
  deletePage?: Maybe<Scalars["Boolean"]>;
  deleteSeoInformation?: Maybe<Scalars["Boolean"]>;
  updateAsset?: Maybe<IGenAsset>;
  updateAuthor?: Maybe<IGenAuthor>;
  updateBlogArticle?: Maybe<IGenBlogArticle>;
  updateCategory?: Maybe<IGenCategory>;
  updatePage?: Maybe<IGenPage>;
  updateSeoInformation?: Maybe<IGenSeoInformation>;
};

export type IGenMutationCreateAssetArgs = {
  input: IGenAsset_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateAuthorArgs = {
  input: IGenAuthor_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateBlogArticleArgs = {
  input: IGenBlogArticle_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateCategoryArgs = {
  input: IGenCategory_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreatePageArgs = {
  input: IGenPage_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationCreateSeoInformationArgs = {
  input: IGenSeoInformation_CreateInput;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenMutationDeleteAssetArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteAuthorArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteBlogArticleArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteCategoryArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeletePageArgs = {
  id: Scalars["ID"];
};

export type IGenMutationDeleteSeoInformationArgs = {
  id: Scalars["ID"];
};

export type IGenMutationUpdateAssetArgs = {
  id: Scalars["ID"];
  input: IGenAsset_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateAuthorArgs = {
  id: Scalars["ID"];
  input: IGenAuthor_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateBlogArticleArgs = {
  id: Scalars["ID"];
  input: IGenBlogArticle_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateCategoryArgs = {
  id: Scalars["ID"];
  input: IGenCategory_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdatePageArgs = {
  id: Scalars["ID"];
  input: IGenPage_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export type IGenMutationUpdateSeoInformationArgs = {
  id: Scalars["ID"];
  input: IGenSeoInformation_UpdateInput;
  locale?: InputMaybe<Scalars["String"]>;
  merge?: InputMaybe<Scalars["Boolean"]>;
};

export enum IGenOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export type IGenPage = {
  __typename?: "Page";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  id?: Maybe<Scalars["ID"]>;
  seo?: Maybe<IGenSeoInformation>;
  slug?: Maybe<Scalars["String"]>;
  titleInternal?: Maybe<Scalars["String"]>;
};

export type IGenPageComponentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageSeoArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenPageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  startCursor?: Maybe<Scalars["String"]>;
};

export type IGenPage_Connection = {
  __typename?: "Page_Connection";
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenPage_ConnectionEdge = {
  __typename?: "Page_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenPage>;
};

export type IGenPage_CreateInput = {
  components?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  seo?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  titleInternal?: InputMaybe<Scalars["String"]>;
};

export type IGenPage_Sort = {
  components?: InputMaybe<IGenOrder>;
  seo?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenPage_UpdateInput = {
  components?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  seo?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  titleInternal?: InputMaybe<Scalars["String"]>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_Components = IGenCaisy_Field_Document_NotFound;

export type IGenQuery = {
  __typename?: "Query";
  Asset?: Maybe<IGenAsset>;
  Author?: Maybe<IGenAuthor>;
  BlogArticle?: Maybe<IGenBlogArticle>;
  Category?: Maybe<IGenCategory>;
  Page?: Maybe<IGenPage>;
  SeoInformation?: Maybe<IGenSeoInformation>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allAuthor?: Maybe<IGenAuthor_Connection>;
  allBlogArticle?: Maybe<IGenBlogArticle_Connection>;
  allCategory?: Maybe<IGenCategory_Connection>;
  allPage?: Maybe<IGenPage_Connection>;
  allSeoInformation?: Maybe<IGenSeoInformation_Connection>;
};

export type IGenQueryAssetArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAuthorArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryBlogArticleArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryCategoryArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryPageArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQuerySeoInformationArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};

export type IGenQueryAllAuthorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenAuthor_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAuthor_Where>>>;
};

export type IGenQueryAllBlogArticleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
};

export type IGenQueryAllCategoryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenCategory_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCategory_Where>>>;
};

export type IGenQueryAllPageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};

export type IGenQueryAllSeoInformationArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
};

export type IGenSeoInformation = {
  __typename?: "SeoInformation";
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  keywords?: Maybe<Scalars["String"]>;
  ogImage?: Maybe<IGenAsset>;
  title?: Maybe<Scalars["String"]>;
  titleInternal?: Maybe<Scalars["String"]>;
};

export type IGenSeoInformationOgImageArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type IGenSeoInformation_Connection = {
  __typename?: "SeoInformation_Connection";
  edges?: Maybe<Array<Maybe<IGenSeoInformation_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGenSeoInformation_ConnectionEdge = {
  __typename?: "SeoInformation_ConnectionEdge";
  cursor?: Maybe<Scalars["String"]>;
  node?: Maybe<IGenSeoInformation>;
};

export type IGenSeoInformation_CreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  ogImage?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  titleInternal?: InputMaybe<Scalars["String"]>;
};

export type IGenSeoInformation_Sort = {
  description?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  ogImage?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenSeoInformation_UpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  ogImage?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  titleInternal?: InputMaybe<Scalars["String"]>;
};

export type IGenSeoInformation_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenAssetFragment = {
  __typename?: "Asset";
  title?: string | null;
  src?: string | null;
  originType?: string | null;
  keywords?: string | null;
  id?: string | null;
  dominantColor?: string | null;
  description?: string | null;
  copyright?: string | null;
  author?: string | null;
};

export type IGenBlogArticleFragment = {
  __typename?: "BlogArticle";
  teaserHeadline?: string | null;
  teaserDesciption?: string | null;
  slug?: string | null;
  id?: string | null;
  text?: {
    __typename?: "BlogArticle_text";
    json?: any | null;
    connections?: Array<
      ({ __typename: "Asset" } & IGenAssetFragment) | null
    > | null;
  } | null;
  teaserImage?: ({ __typename?: "Asset" } & IGenAssetFragment) | null;
  seo?: {
    __typename?: "SeoInformation";
    id?: string | null;
    description?: string | null;
    keywords?: string | null;
    title?: string | null;
    ogImage?: ({ __typename?: "Asset" } & IGenAssetFragment) | null;
  } | null;
};

export type IGenAllBlogArticleQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]>;
}>;

export type IGenAllBlogArticleQuery = {
  __typename?: "Query";
  allBlogArticle?: {
    __typename?: "BlogArticle_Connection";
    totalCount?: number | null;
    pageInfo?: {
      __typename?: "PageInfo";
      hasNextPage?: boolean | null;
      endCursor?: string | null;
    } | null;
    edges?: Array<{
      __typename?: "BlogArticle_ConnectionEdge";
      node?: {
        __typename?: "BlogArticle";
        id?: string | null;
        slug?: string | null;
        teaserDesciption?: string | null;
        teaserHeadline?: string | null;
        _meta?: {
          __typename?: "CaisyDocument_Meta";
          publishedAt?: any | null;
        } | null;
        teaserImage?: ({ __typename?: "Asset" } & IGenAssetFragment) | null;
        text?: {
          __typename?: "BlogArticle_text";
          json?: any | null;
          connections?: Array<
            ({ __typename: "Asset" } & IGenAssetFragment) | null
          > | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type IGenAllBlogArticleBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type IGenAllBlogArticleBySlugQuery = {
  __typename?: "Query";
  allBlogArticle?: {
    __typename?: "BlogArticle_Connection";
    edges?: Array<{
      __typename?: "BlogArticle_ConnectionEdge";
      node?: ({ __typename?: "BlogArticle" } & IGenBlogArticleFragment) | null;
    } | null> | null;
  } | null;
};

export type IGenAllBlogArticleMetaQueryVariables = Exact<{
  after?: InputMaybe<Scalars["String"]>;
}>;

export type IGenAllBlogArticleMetaQuery = {
  __typename?: "Query";
  allBlogArticle?: {
    __typename?: "BlogArticle_Connection";
    totalCount?: number | null;
    pageInfo?: {
      __typename?: "PageInfo";
      hasNextPage?: boolean | null;
      endCursor?: string | null;
    } | null;
    edges?: Array<{
      __typename?: "BlogArticle_ConnectionEdge";
      node?: {
        __typename?: "BlogArticle";
        id?: string | null;
        slug?: string | null;
        _meta?: {
          __typename?: "CaisyDocument_Meta";
          publishedAt?: any | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export const AssetFragmentDoc = gql`
  fragment Asset on Asset {
    title
    src
    originType
    keywords
    id
    dominantColor
    description
    copyright
    author
  }
`;
export const BlogArticleFragmentDoc = gql`
  fragment BlogArticle on BlogArticle {
    text {
      connections {
        __typename
        ...Asset
      }
      json
    }
    teaserImage {
      ...Asset
    }
    teaserHeadline
    teaserDesciption
    slug
    seo {
      id
      description
      keywords
      ogImage {
        ...Asset
      }
      title
    }
    id
  }
`;
export const AllBlogArticleDocument = gql`
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
  ${AssetFragmentDoc}
`;
export const AllBlogArticleBySlugDocument = gql`
  query allBlogArticleBySlug($slug: String!) {
    allBlogArticle(where: { slug: { eq: $slug } }) {
      edges {
        node {
          ...BlogArticle
        }
      }
    }
  }
  ${BlogArticleFragmentDoc}
  ${AssetFragmentDoc}
`;
export const AllBlogArticleMetaDocument = gql`
  query allBlogArticleMeta($after: String) {
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
        }
      }
    }
  }
`;
export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    allBlogArticle(
      variables?: IGenAllBlogArticleQueryVariables,
      options?: C
    ): Promise<IGenAllBlogArticleQuery> {
      return requester<
        IGenAllBlogArticleQuery,
        IGenAllBlogArticleQueryVariables
      >(
        AllBlogArticleDocument,
        variables,
        options
      ) as Promise<IGenAllBlogArticleQuery>;
    },
    allBlogArticleBySlug(
      variables: IGenAllBlogArticleBySlugQueryVariables,
      options?: C
    ): Promise<IGenAllBlogArticleBySlugQuery> {
      return requester<
        IGenAllBlogArticleBySlugQuery,
        IGenAllBlogArticleBySlugQueryVariables
      >(
        AllBlogArticleBySlugDocument,
        variables,
        options
      ) as Promise<IGenAllBlogArticleBySlugQuery>;
    },
    allBlogArticleMeta(
      variables?: IGenAllBlogArticleMetaQueryVariables,
      options?: C
    ): Promise<IGenAllBlogArticleMetaQuery> {
      return requester<
        IGenAllBlogArticleMetaQuery,
        IGenAllBlogArticleMetaQueryVariables
      >(
        AllBlogArticleMetaDocument,
        variables,
        options
      ) as Promise<IGenAllBlogArticleMetaQuery>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
