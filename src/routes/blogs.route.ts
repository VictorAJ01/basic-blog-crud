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
  getAllBlogsSchema,
  getBlogByAuthorSchema,
  getBlogByIdSchema,
  updateBlogSchema,
} from "../schemas/blog.schema.js";

const router = express.Router();

router.get("/posts/:id", validate(getBlogByIdSchema), getBlogById);
router.get(
  "/posts/author/:author",
  validate(getBlogByAuthorSchema),
  getBlogByAuthor,
);
router.patch("/posts/:id", validate(updateBlogSchema), updateBlog);
router.delete("/posts/:id", validate(getBlogByIdSchema), deleteBlog);
router.post("/posts", validate(createBlogSchema), createBlog);
router.get("/posts", validate(getAllBlogsSchema), getAllBlogs);

export default router;
