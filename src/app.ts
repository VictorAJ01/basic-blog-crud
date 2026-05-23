import express from "express";
import cors from "cors";
import blogsRoutes from "./routes/blogs.route.js";
import { connectDB } from "./config/db.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api", blogsRoutes);

// Error handling middleware
app.use(globalErrorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});
