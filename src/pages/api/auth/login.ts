import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/db";
import { loginController } from "@/controllers/Admin/loginController";

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await loginController(req, res);
};

export default handler;
