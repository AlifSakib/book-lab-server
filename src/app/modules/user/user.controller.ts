import { Request, Response } from "express";
import { UserService } from "./user.service";

const create_user = async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  try {
    const user = await UserService.create_user(userData);
    return res.status(201).json({
      data: user,
      message: "User created",
      success: true,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
export const UserController = {
  create_user,
};
