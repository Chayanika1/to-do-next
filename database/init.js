import mongoose from "mongoose";

if (mongoose.connection.readyState !== 4) {
  mongoose.connect(process.env.MONGODB_URL)
}