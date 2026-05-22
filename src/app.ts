import express from "express";
import cors from "cors";
import blogsRoutes from "./routes/blogs.route.js";
import { connectDB } from "./config/db.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api", blogsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});
