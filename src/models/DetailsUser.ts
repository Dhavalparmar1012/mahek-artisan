import mongoose from "mongoose";
import { IDetailsUserModel } from "@/controllers/interfaces";

const userSchema = new mongoose.Schema<IDetailsUserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fname: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DetailsUser =
  mongoose.models.DetailsUser ||
  mongoose.model<IDetailsUserModel>("DetailsUser", userSchema);

export default DetailsUser;
