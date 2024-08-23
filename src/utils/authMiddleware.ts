import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import JWT from "jsonwebtoken";
import userModel from "../models/userModel";

interface AuthenticatedRequest extends NextApiRequest {
  user?: any; // Adjust type as per your user model
}

export const requireSignIn =
  (handler: NextApiHandler) =>
  async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization as string,
        process.env.JWT_SECRET as string
      );
      req.user = decode;
      return handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Unauthorized" });
    }
  };

export const isAdmin =
  (handler: NextApiHandler) =>
  async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const user = await userModel.findById(req.user?._id); // Use optional chaining to access _id
      if (!user || user.role !== 1) {
        return res.status(401).json({ message: "Unauthorized Access" });
      }
      return handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Error in admin middleware" });
    }
  };
