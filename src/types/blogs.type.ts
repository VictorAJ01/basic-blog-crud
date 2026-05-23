import type { Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type GetBlogByAuthorRequestPayload = {
  author: string;
};
