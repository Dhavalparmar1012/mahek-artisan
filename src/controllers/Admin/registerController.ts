import userModel from "@/models/userModel";
import { hashPassword } from "@/utils/authHelper";
import { NextApiRequest, NextApiResponse } from "next";

export const registerController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "Already registered, please login",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
