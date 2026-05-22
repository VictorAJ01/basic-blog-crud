import type { Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: string | Date;
}

export type GetBlogByAuthorRequestPayload = {
  author: string;
};
