import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/db";
import { registerController } from "@/controllers/Admin/registerController";

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  await registerController(req, res);
};

export default handler;
