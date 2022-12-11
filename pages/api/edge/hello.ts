import { NextRequest } from "next/server";
import { successJson } from "../../../utils/edge-api-helper";

// Cloudflare requires Next.js Edge API Routes:
//  https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/
//  https://nextjs.org/docs/api-routes/edge-api-routes
export default async function handler(req: NextRequest) {
  // const { searchParams } = new URL(req.url);
  // const email = searchParams.get("email");

  return successJson({ name: "Cloudflare Worker" });
}
