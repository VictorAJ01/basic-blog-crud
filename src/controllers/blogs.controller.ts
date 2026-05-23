import type { NextFunction, Request, Response } from "express";
import { Blog } from "../models/blog.model.js";
import type { GetBlogByAuthorRequestPayload } from "../types/blogs.type.js";
import { catchAsync } from "../utils/catch-async.js";
import { AppError } from "../utils/app-error.js";

export const createBlog = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const existingBlog = await Blog.findOne({
      title: request.body.title,
      author: request.body.author,
    });

    if (existingBlog)
      return next(
        new AppError("You have already created a blog with this title.", 409),
      );

    const newBlog = await Blog.create(request.body);
    response.status(201).json({ status: "success", data: newBlog });
  },
);

export const getAllBlogs = catchAsync(
  async (_: Request, response: Response) => {
    const blogs = await Blog.find({});

    response.status(200).json({
      status: "success",
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  },
);

export const getBlogById = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const blog = await Blog.findById(request.params.id);

    if (!blog) return next(new AppError("Blog not found", 404));

    response.status(200).json({ status: "success", data: blog });
  },
);

export const getBlogByAuthor = catchAsync(
  async (
    request: Request<GetBlogByAuthorRequestPayload>,
    response: Response,
    next: NextFunction,
  ) => {
    const blog = await Blog.findOne({ author: request.params.author });

    if (!blog) return next(new AppError("Blog not found", 404));

    response.status(200).json({ status: "success", data: blog });
  },
);

export const updateBlog = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const updatedBlog = await Blog.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true, runValidators: true },
    );

    if (!updatedBlog) return next(new AppError("Blog not found", 404));

    response.status(200).json({ status: "success", data: updatedBlog });
  },
);

export const deleteBlog = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const blog = await Blog.findByIdAndDelete(request.params.id);

  if (!blog) return next(new AppError("Blog not found", 404));

  response.status(204).json({ status: "success", data: null });
};
