import { NextApiRequest, NextApiResponse } from "next";
import JWT from "jsonwebtoken";
import userModel from "@/models/userModel";
import { comparePassword } from "@/utils/authHelper";

export const loginController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email is not registered" });
    }

    const passwordMatch: boolean = await comparePassword(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token with user's _id
    const token: string = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Error in login" });
  }
};
