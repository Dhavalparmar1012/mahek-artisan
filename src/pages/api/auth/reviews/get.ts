import { NextApiRequest, NextApiResponse } from "next";
import { getReviewController } from "../../../../controllers/reviewController";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await getReviewController(req, res);
};

export default handler;
