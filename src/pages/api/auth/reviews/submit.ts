import { NextApiRequest, NextApiResponse } from "next";
import { submitReviewController } from "@/controllers/reviewController";
import { Request, Response } from "express";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await submitReviewController(
    req as unknown as Request,
    res as unknown as Response
  );
};

export default handler;
