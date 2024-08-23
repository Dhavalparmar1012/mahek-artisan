import mongoose from "mongoose";
import { IUserContactModel } from "@/controllers/interfaces";

const userSchema = new mongoose.Schema<IUserContactModel>(
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
    lname: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserContact =
  mongoose.models.UserContact ||
  mongoose.model<IUserContactModel>("UserContact", userSchema);

export default UserContact;
