import { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import { getSdk as getSdkWithClient, Requester } from "./__generated/sdk";

const requester: Requester<any> = async (doc: any, vars: any) => {
  const ROOT_PROJECT_ID = process.env.ROOT_PROJECT_ID;
  const ROOT_API_KEY = process.env.ROOT_API_KEY;
  const NODE_ENV = process.env.NODE_ENV;
  if (!ROOT_PROJECT_ID || ROOT_PROJECT_ID == "") {
    throw new Error(
      "ROOT_PROJECT_ID is not defined - please add it to the env file"
    );
  }
  if (!ROOT_API_KEY || ROOT_API_KEY == "") {
    throw new Error(
      "ROOT_API_KEY is not defined - please add it to the env file"
    );
  }

  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${ROOT_PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": `${ROOT_API_KEY}`,
      },
    }
  );

  try {
    const res = await client.rawRequest(print(doc), vars);
    return res?.data as any;
  } catch (err: any) {
    if (NODE_ENV == "development") {
      console.error(
        "Error in GraphQL request:",
        "\n" + print(doc) + "\n",
        vars,
        "\n" + err.message
      );
    } else {
      console.error(err);
    }
  }
};

export const rootSDK = getSdkWithClient(requester);
