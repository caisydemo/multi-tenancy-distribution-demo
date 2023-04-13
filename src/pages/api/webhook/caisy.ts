import type { NextApiRequest, NextApiResponse } from "next";
import { initSdk, WebhookPayload, WebhookPayloadTrigger } from "@caisy/sdk";

const getEnvVar = (key: string) => {
  const value = process.env[key];
  if (value === undefined || value === "") {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const [
  caisyWebhookSecret,
  caisyProjectId,
  caisyPersonalAccessToken,
  caisyTanantsGroupId,
] = [
  "CAISY_WEBHOOK_SECRET",
  "CAISY_PROJECT_ID",
  "CAISY_PERSONAL_ACCESS_TOKEN",
  "TANANTS_GROUP_ID",
].map(getEnvVar);

const caisySDK = initSdk({
  token: caisyPersonalAccessToken,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // verify secret header from webhook
    const secret = `${req.headers["x-webhook-secret"]}`;
    if (secret !== caisyWebhookSecret) {
      return res.status(401).json({ error: "unauthorized" });
    }

    // check type of trigger from caisy
    const payload = req.body as WebhookPayload;

    if (
      [
        WebhookPayloadTrigger.BLUEPRINT_CREATE,
        WebhookPayloadTrigger.BLUEPRINT_UPDATE,
        WebhookPayloadTrigger.BLUEPRINT_DELETE,
      ].includes(payload.webhook.trigger)
    ) {
      // we get all the projects for our tanants
      // user with the personal access token needs to have access to all the projects

      const projectsReponse = await caisySDK.GetManyProjectsByUserID({
        input: {
          filter: {
            groupId: caisyTanantsGroupId,
          },
        },
      });
      await Promise.all(
        projectsReponse.GetManyProjectsByUserID?.connection?.edges?.map(
          (edge) =>
            // we duplicate the blueprints of our template to all the tanant projects
            caisySDK.DuplicateToProject({
              input: {
                projectId: edge?.node?.projectId,
                selection: {
                  blueprint: true,
                },
                source: {
                  projectId: caisyProjectId,
                },
              },
            })
        ) ?? []
      );
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err?.message || "unknown" });
  }
}
