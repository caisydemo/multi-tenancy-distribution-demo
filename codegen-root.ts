import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.local" });

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`https://cloud.caisy.io/api/v3/e/${process.env.ROOT_PROJECT_ID}/graphql` ||
      ""]: {
        headers: {
          "x-caisy-apikey": `${process.env.ROOT_API_KEY}`,
        },
      },
    },
  ],
  generates: {
    "src/services/graphql/root/__generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/services/graphql/root/__generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/services/graphql/root/__generated/sdk.ts": {
      documents: [
        "src/services/graphql/root/**/*.graphql",
        "src/services/graphql/root/fragments/**/*.ts",
        "src/services/graphql/root/queries/**/*.ts",
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
