import mongoose from "mongoose";

if (mongoose.connection.readyState !== 4) {
  mongoose.connect('mongodb://localhost:27017/myTodo')
}