import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/db";
import { resetPasswordController } from "@/controllers/Admin/resetPasswordController";

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  await resetPasswordController(req, res);
};

export default handler;
