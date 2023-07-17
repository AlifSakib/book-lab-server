import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../helpers/pagination-helper";
import { booksSearchableFields } from "./book.constants";
import { IBook } from "./book.interface";
import { Book } from "./book.model";

interface IGetAllBooksResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: IBook[];
}

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async (
  filters: Record<string, unknown>,
  options: Record<string, unknown>
): Promise<IGetAllBooksResponse> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: booksSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const bookService = {
  createBook,
  getAllBooks,
};
