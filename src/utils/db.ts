import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      
      const conn = await mongoose.connect(process.env.MONGO_URL as string);
      console.log(`Connected to MongoDB Database ${conn.connection.host}`);
    }
  } catch (error) {
    console.error(`Error in MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
