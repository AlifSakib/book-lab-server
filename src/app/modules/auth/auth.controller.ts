import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const user_login = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.login_user(req.body);
    return res.status(200).json({
      data: user,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const AuthController = {
  user_login,
};
