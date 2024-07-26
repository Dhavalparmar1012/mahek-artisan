import { NextApiRequest, NextApiResponse } from "next";
import { deleteContactController } from "@/controllers/contactController";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await deleteContactController(req, res);
};

export default handler;
