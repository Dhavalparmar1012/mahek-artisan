import {
  ControllerResponse,
  IUserContact,
  SubmitContactRequest,
} from "./interfaces";
import UserContact from "@/models/UserContact";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/db";
import { sendContactSubmissionEmail } from "@/utils/mailer";

// Controller to submit a contacts
export const submitContactController = async (
  req: SubmitContactRequest,
  res: ControllerResponse<any>
) => {
  try {
    const { email, fname, lname, telephone, message } = req.body;

    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!fname) {
      return res.send({ error: "First name is required" });
    }
    if (!lname) {
      return res.send({ error: "last name is required" });
    }
    if (!telephone) {
      return res.send({ error: "Telephone is required" });
    }
    if (!message) {
      return res.send({ error: "Message is required" });
    }
    // Check if user with same email already exists
    const existingUser = await UserContact.findOne({ email });

    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    // Create new user
    const newUser: IUserContact = await new UserContact({
      email,
      fname,
      lname,
      telephone,
      message,
    }).save();

    await sendContactSubmissionEmail({
      email,
      fname,
      lname,
      telephone,
      message,
    });

    res.status(201).send({
      success: true,
      message: "Contact submitted successfully",
      newUser,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to submit contact",
      error: error.message,
    });
  }
};

export const getContactController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB();

  try {
    const { page = "1", limit = "5" } = req.query as {
      page?: string;
      limit?: string;
    };

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const contactList = await UserContact.find().skip(skip).limit(limitNumber);

    const totalContacts = await UserContact.countDocuments();

    res.status(200).json({ contactList, totalContacts });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
};

export const deleteContactController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(); // Ensure the database is connected

  if (req.method !== "DELETE") {
    return res.status(405).send({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { id } = req.query as { id: string }; // Assuming 'id' is passed in query params
    const user: IUserContact | null = await UserContact.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Contact Deleted Successfully",
      user,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Error while deleting contact",
      error: error.message,
    });
  }
};
