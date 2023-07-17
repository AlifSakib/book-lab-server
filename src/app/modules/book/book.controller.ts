import { Request, Response } from "express";
import pick from "../../shared/pick";
import { bookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  const payload = req.body;
  try {
    const result = await bookService.createBook(payload);
    return res.status(201).json({
      success: true,
      data: result,
      message: "Book Added successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  const filters = pick(req.query, ["searchTerm", "title", "author", "genre"]);
  const options = pick(req.query, [
    "page",
    "limit",
    "sortBy",
    "skip",
    "sortOrder",
  ]);

  try {
    const result = await bookService.getAllBooks(filters, options);
    return res.status(200).json({
      success: true,
      data: result,
      message: "All Books",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const bookController = {
  createBook,
  getAllBooks,
};
