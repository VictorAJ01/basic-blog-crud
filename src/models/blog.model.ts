import { model, Schema } from "mongoose";
import type { IBlog } from "../types/blogs.type.js";

export const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Blog = model<IBlog>("Blog", blogSchema);
