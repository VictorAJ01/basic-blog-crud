import mongoose from "mongoose";

const DB_URI = "mongodb://127.0.0.1:27017/blogs";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_URI);
    console.log("🍃 MongoDB connected locally and securely.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Kill the server if the DB fails to connect
  }
};
