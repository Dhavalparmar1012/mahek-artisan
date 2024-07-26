import {
  SubmitReviewRequest,
  ControllerResponse,
  IDetailsUser,
} from "./interfaces";
import DetailsUser from "../models/DetailsUser";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/db";

// Controller to submit a review
export const submitReviewController = async (
  req: SubmitReviewRequest,
  res: ControllerResponse<any>
) => {
  try {
    const { email, fname, rating, review, country } = req.body;

    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!fname) {
      return res.send({ error: "First name is required" });
    }
    if (!rating) {
      return res.send({ error: "Rating is required" });
    }
    if (!review) {
      return res.send({ error: "Review is required" });
    }
    if (!country) {
      return res.send({ error: "Country is required" });
    }

    // Check if user with same email already exists
    const existingUser = await DetailsUser.findOne({ email });

    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    // Create new user
    const newUser: IDetailsUser = await new DetailsUser({
      email,
      fname,
      rating,
      review,
      country,
    }).save();

    res.status(201).send({
      success: true,
      message: "Review submitted successfully",
      newUser,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to submit review",
      error: error.message,
    });
  }
};

// Controller to fetch reviews with pagination
export const getReviewController = async (
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

    const reviewsList = await DetailsUser.find().skip(skip).limit(limitNumber);

    const totalReviews = await DetailsUser.countDocuments();

    res.status(200).json({ reviewsList, totalReviews });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};

// Controller to delete a review by ID
export const deleteReviewController = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB();

  if (req.method !== "DELETE") {
    return res.status(405).send({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { id } = req.query as { id: string }; // Assuming 'id' is passed in query params
    const user: IDetailsUser | null = await DetailsUser.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Review Deleted Successfully",
      user,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Error while deleting Review",
      error: error.message,
    });
  }
};
