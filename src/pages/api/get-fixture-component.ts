import type { NextApiRequest, NextApiResponse } from "next";
import sampleResponse from "@/fixtures/1-response";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sampleResponse);
}
