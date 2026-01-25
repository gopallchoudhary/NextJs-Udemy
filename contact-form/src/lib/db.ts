import mongoose from "mongoose"
let isConnected = false
async function dbConnect() {
    if (isConnected) {
        console.log("MongoDB already connected");
        return;
    }
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}/contact-form`)
        isConnected = db.connections[0].readyState === 1
        console.log("MongoDb successfully connected");

    } catch (error) {
        console.log("MongoDb connection failed", error);    
        throw error

    }
}

export default dbConnect