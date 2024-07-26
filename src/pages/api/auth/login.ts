import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/db";
import userModel from "../../../models/userModel";
import { comparePassword } from "../../../utils/authHelper";
import JWT from "jsonwebtoken";

// Connect to MongoDB
connectDB();

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Ensure only POST requests are allowed
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    // Destructure email and password from request body
    const { email, password } = req.body;

    // Validate presence of email and password
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email in the database
    const user = await userModel.findOne({ email });

    // Handle case where user does not exist
    if (!user) {
      return res.status(404).json({ message: "Email is not registered" });
    }

    // Compare provided password with hashed password in database
    const passwordMatch: boolean = await comparePassword(
      password,
      user.password
    );

    // Handle case where password does not match
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

export default loginHandler;
