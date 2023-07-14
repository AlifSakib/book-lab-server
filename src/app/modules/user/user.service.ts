import { IUser } from "./user.interface";
import { User } from "./user.model";
const create_user = async (payload: IUser):Promise<IUser | null> => {
  try {
    const user = await User.create(payload);
    return user;
  } catch (error) {
    throw error;
  }
};

export const UserService = {
  create_user,
};
