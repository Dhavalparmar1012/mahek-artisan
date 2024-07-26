import { NextApiRequest, NextApiResponse } from "next";
import { deleteReviewController } from "@/controllers/reviewController";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await deleteReviewController(req, res);
};

export default handler;
