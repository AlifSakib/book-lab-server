import { User } from "../user/user.model";

const login_user = async (payload: ILoginUser) => {
  const { email, password } = payload;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }
  if (user.password !== password) {
    throw new Error("Password is incorrect");
  }

  return user;
};

export const AuthService = {
    login_user,
};