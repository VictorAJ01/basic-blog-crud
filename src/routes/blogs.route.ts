import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogByAuthor,
  getBlogById,
  updateBlog,
} from "../controllers/blogs.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createBlogSchema,
  getBlogByAuthorSchema,
  getBlogByIdSchema,
  updateBlogSchema,
} from "../schemas/blog.schema.js";

const router = express.Router();

router.get("/blog/:id", validate(getBlogByIdSchema), getBlogById);
router.get(
  "/blog/author/:author",
  validate(getBlogByAuthorSchema),
  getBlogByAuthor,
);
router.patch("/blog/:id", validate(updateBlogSchema), updateBlog);
router.delete("/blog/:id", validate(getBlogByIdSchema), deleteBlog);
router.post("/blogs", validate(createBlogSchema), createBlog);
router.get("/blogs", getAllBlogs);

export default router;
