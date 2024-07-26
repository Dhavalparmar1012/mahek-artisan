import mongoose, { Document } from "mongoose";

export interface IUserContact extends Document {
  email: string;
  fname: string;
  lname: string;
  message: string;
  telephone: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserContact>(
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
  mongoose.model<IUserContact>("UserContact", userSchema);

export default UserContact;
