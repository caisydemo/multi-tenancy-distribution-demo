import { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import { getSdk as getSdkWithClient, Requester } from "./__generated/sdk";

const requester: Requester<any> = async (doc: any, vars: any) => {
  const CHILD_PROJECT_ID = process.env.CHILD_PROJECT_ID;
  const CHILD_API_KEY = process.env.CHILD_API_KEY;
  const NODE_ENV = process.env.NODE_ENV;
  if (!CHILD_PROJECT_ID || CHILD_PROJECT_ID == "") {
    throw new Error(
      "CHILD_PROJECT_ID is not defined - please add it to the env file"
    );
  }
  if (!CHILD_API_KEY || CHILD_API_KEY == "") {
    throw new Error(
      "CHILD_API_KEY is not defined - please add it to the env file"
    );
  }

  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${CHILD_PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": `${CHILD_API_KEY}`,
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

export const childSDK = getSdkWithClient(requester);
