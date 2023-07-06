import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongodb = process.env.mongo;
export const Connection = async () => {
  try {
    await mongoose.connect(mongodb, { useNewUrlParser: true });
    console.log("Mongodb");
  } catch (error) {
    console.log("Error while connection", error);
  }
};

