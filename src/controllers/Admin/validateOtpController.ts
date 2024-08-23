import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/userModel";

export const validateOtpController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { email, resetPasswordOTP } = req.body;

  // Ensure that both email and OTP are provided in the request
  if (!email || !resetPasswordOTP) {
    return res
      .status(400)
      .json({ success: false, message: "Email and OTP are required." });
  }

  try {
    const user = await User.findOne({ email, resetPasswordOTP });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    // Check if OTP has expired
    if (user.resetPasswordExpires && user.resetPasswordExpires < new Date()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP has expired." });
    }

    res.status(200).json({ success: true, message: "OTP validated." });
  } catch (error) {
    console.error("Error validating OTP:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
