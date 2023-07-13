import { IUser } from "./user.interface";
import { User } from "./user.model";
const create_user = async (payload: IUser) => {
  try {
    const user = new User(payload);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

export const UserService = {
  create_user,
};
