import { forgotPasswordController } from "@/controllers/Admin/forgotPasswordController";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await forgotPasswordController(req, res);
};

export default handler;
