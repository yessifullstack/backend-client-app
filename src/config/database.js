
import { config } from "dotenv";
config()
import mongoose from "mongoose";





export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('DB IS CONNECTED');
    } catch (error) {
        console.log(error)
    }
}
