import type { Request, Response } from "express";
import { Blog } from "../models/blog.model.js";
import type { GetBlogByAuthorRequestPayload } from "../types/blogs.type.js";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;

    const blog = await Blog.findOne({ title, author });

    if (blog) {
      return res
        .status(409)
        .json({ message: "You have already created a blog with this title." });
    }

    const newBlog = await Blog.create({ title, content, author });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBlogs = async (_: Request, res: Response) => {
  try {
    const blogs = await Blog.find({});

    res.status(200).json({
      status: "success",
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found" });
    }

    res.status(200).json({ status: "success", data: blog });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBlogByAuthor = async (
  req: Request<GetBlogByAuthorRequestPayload>,
  res: Response,
) => {
  try {
    const author = req.params.author;

    const blog = await Blog.findOne({ author });

    if (!blog) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found" });
    }

    res.status(200).json({ status: "success", data: blog });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// TODO: Fix Bug
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { title, content } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );

    if (!updatedBlog) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found" });
    }

    res.status(200).json({ status: "success", data: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found" });
    }

    res.status(200).json({ status: "success", data: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
