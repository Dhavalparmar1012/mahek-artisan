import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/db";
import { validateOtpController } from "@/controllers/Admin/validateOtpController";

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  await validateOtpController(req, res);
};

export default handler;
