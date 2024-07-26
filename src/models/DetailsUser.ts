import mongoose, { Document } from "mongoose";

export interface IDetailsUser extends Document {
  email: string;
  fname: string;
  rating: number;
  review: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IDetailsUser>(
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
  mongoose.model<IDetailsUser>("DetailsUser", userSchema);

export default DetailsUser;
