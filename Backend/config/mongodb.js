import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
  

    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is missing in the environment variables");
    }

    await mongoose.connect(uri);
    mongoose.connection.on('connected', () => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;
