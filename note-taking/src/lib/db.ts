import mongoose from "mongoose";
let isConnected = false;

async function dbConnect() {

    if (isConnected) {
        console.log("MongoDB already connected");
        return;
    }

    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}/note-taking`)
        isConnected = db.connections[0].readyState === 1;
        console.log("Database connected successfully: ");

    } catch (error) {
        console.error("Database connection error ");
        throw error
    }

}

export default dbConnect