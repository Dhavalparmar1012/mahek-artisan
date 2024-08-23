// interfaces.ts

import { Request, Response } from "express";
import { Document } from "mongoose";

// Interface for request body in submitReviewController
export interface SubmitReviewRequest extends Request {
  body: {
    email: string;
    fname: string;
    rating: number;
    review: string;
    country: string;
  };
}

// Interface for response object in all controllers
export interface ControllerResponse<T> extends Response {
  json(data?: T): this;
}

// Interface for the DetailsUser document
export interface IDetailsUser extends Document {
  email: string;
  fname: string;
  rating: number;
  review: string;
  country: string;
}

export interface IDetailsUserModel extends Document {
  email: string;
  fname: string;
  rating: number;
  review: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubmitContactRequest extends Request {
  body: {
    email: string;
    fname: string;
    lname: string;
    telephone: string;
    message: string;
  };
}

export interface IUserContact extends Document {
  email: string;
  fname: string;
  lname: string;
  telephone: string;
  message: string;
}

export interface IUserContactModel extends Document {
  email: string;
  fname: string;
  lname: string;
  message: string;
  telephone: string;
  createdAt: Date;
  updatedAt: Date;
}
