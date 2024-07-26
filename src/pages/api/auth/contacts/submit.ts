import { NextApiRequest, NextApiResponse } from "next";
import { submitContactController } from "@/controllers/contactController";
import { Request, Response } from "express";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await submitContactController(
    req as unknown as Request,
    res as unknown as Response
  );
};

export default handler;
