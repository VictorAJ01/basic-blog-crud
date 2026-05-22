import { model, Schema } from "mongoose";
import type { IBlog } from "../types/blogs.type.js";

export const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Blog = model<IBlog>("Blog", blogSchema);
