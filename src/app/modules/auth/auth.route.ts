import express from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post("/login-user", AuthController.user_login);

export const AuthRoute = router;
