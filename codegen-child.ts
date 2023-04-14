import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.local" });

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`https://cloud.caisy.io/api/v3/e/${process.env.CHILD_PROJECT_ID}/graphql` ||
      ""]: {
        headers: {
          "x-caisy-apikey": `${process.env.CHILD_API_KEY}`,
        },
      },
    },
  ],
  generates: {
    "src/services/graphql/child/__generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/services/graphql/child/__generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/services/graphql/child/__generated/sdk.ts": {
      documents: [
        "src/services/graphql/child/**/*.graphql",
        "src/services/graphql/child/fragments/**/*.ts",
        "src/services/graphql/child/queries/**/*.ts",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: "combine",
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        typesPrefix: "IGen",
      },
    },
  },
};

export default config;
