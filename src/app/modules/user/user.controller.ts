import { Request, Response } from "express";
import { UserService } from "./user.service";

const create_user = async (req: Request, res: Response) => {
  try {
    const user = await UserService.create_user(req.body);
    return res.status(201).json({
      data: user,
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
