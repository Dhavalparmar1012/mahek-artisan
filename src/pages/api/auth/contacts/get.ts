import { NextApiRequest, NextApiResponse } from "next";
import { getContactController } from "../../../../controllers/contactController";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await getContactController(req, res);
};

export default handler;
