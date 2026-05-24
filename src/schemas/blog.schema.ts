import { z } from "zod";

export const createBlogSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters long")
      .max(100, "Title must be at most 100 characters long"),
    content: z
      .string()
      .min(10, "Content must be at least 10 characters long")
      .max(1000, "Content must be at most 1000 characters long"),
    category: z
      .string()
      .min(2, "Category must be at least 2 characters long")
      .max(100, "Category must be at most 100 characters long"),
    tags: z.array(z.string().min(2).max(100)),
    author: z
      .string()
      .min(2, "Author must be at least 2 characters long")
      .max(100, "Author must be at most 100 characters long"),
  }),
});

export const getAllBlogsSchema = z.object({
  query: z.object({
    term: z.string().trim().min(2).optional(),
  }),
});

export const getBlogByIdSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid blog ID format. Must be a 24-character hex string.",
    }),
  }),
});

export const getBlogByAuthorSchema = z.object({
  params: z.object({
    author: z
      .string()
      .min(2, "Author must be at least 2 characters long")
      .max(100, "Author must be at most 100 characters long"),
  }),
});

export const updateBlogSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid blog ID format. Must be a 24-character hex string.",
    }),
  }),
  body: z
    .object({
      title: z
        .string()
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title must be at most 100 characters long")
        .optional(),
      content: z
        .string()
        .min(10, "Content must be at least 10 characters long")
        .max(1000, "Content must be at most 1000 characters long")
        .optional(),
      category: z
        .string()
        .min(2, "Category must be at least 2 characters long")
        .max(100, "Category must be at most 100 characters long")
        .optional(),
      tags: z.array(z.string().min(2).max(100)).optional(),
    })
    .strict(),
});
