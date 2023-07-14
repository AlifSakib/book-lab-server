import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>(
  {
    full_name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser, UserModel>("User", userSchema);
