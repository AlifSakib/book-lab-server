import express from "express";
import { AuthRoute } from "../modules/auth/auth.route";
import { bookRouter } from "../modules/book/book.route";
import { UserRoute } from "../modules/user/user.route";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/user",
    route: UserRoute,
  },
  {
    path: "/books",
    route: bookRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
