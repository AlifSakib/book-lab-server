import express from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/create-new-book", bookController.createBook);
router.get("/get-all-books", bookController.getAllBooks);

export { router as bookRouter };
