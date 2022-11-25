// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// Traditional Node.js-powered API route
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }

import { NextRequest } from "next/server";

// Cloudflare requires Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes
export default async function handler(req: NextRequest) {
  return new Response(JSON.stringify({ name: "Cloudflare Worker" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
