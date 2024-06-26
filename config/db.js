import mongoose from 'mongoose';

export default async function connectDB(){
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected: ", conn.connection.host);
    } catch(e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
}