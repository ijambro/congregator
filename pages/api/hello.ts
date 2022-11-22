// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// Cloudflare requires Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes
export const config = {
  runtime: "experimental-edge"
};

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
