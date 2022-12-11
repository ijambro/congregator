import { NextRequest } from "next/server";
import { responseJson, successJson } from "../../../utils/edge-api-helper";
// import { query } from "../../utils/data-helper";

// Cloudflare requires Next.js Edge API Routes:
//  https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/
//  https://nextjs.org/docs/api-routes/edge-api-routes
export default async function handler(req: NextRequest) {
  // const { searchParams } = new URL(req.url);
  // const email = searchParams.get("email");

  if (req.method === "GET") {
    // return successJson({ name: "Transport types", todo: "Query the DB!" });

    // Query the transport table and return all rows
    try {
      console.log("NOT Querying...");
      // const result = await query("SELECT * FROM transport");
      // console.log("Query result", result);
      // return successJson(result);
      return successJson({ result: "NOT Querying" });
    } catch (e) {
      console.log("Query error", e);
      return responseJson(e, 500);
    }
  } else {
    return responseJson(
      { error: "Operation not supported: " + req.method },
      405
    );
  }
}
