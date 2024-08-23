import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import nodemailer from "nodemailer";
import userModel from "@/models/userModel";

export const forgotPasswordController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = crypto.randomInt(100000, 999999).toString();

    user.resetPasswordOTP = otp;
    user.resetPasswordExpires = Date.now() + 3600000; // OTP valid for 1 hour

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is ${otp}. It will expire in 1 hour.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "OTP sent successfully" });
    });
  } catch (error) {
    console.error("Error in forgotPasswordHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
