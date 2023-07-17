import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  review : string;
  publicationDate: Date;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  searchTerm?: string;
};
