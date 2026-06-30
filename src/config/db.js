const mongoose = require("mongoose");
const { mongoURI } = require("../config/env");

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

module.exports = connectDB;