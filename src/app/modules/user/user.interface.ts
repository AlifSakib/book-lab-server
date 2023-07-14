import { Model } from "mongoose";

export type IUser = {
  full_name: string;
  email: string;
  password: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
