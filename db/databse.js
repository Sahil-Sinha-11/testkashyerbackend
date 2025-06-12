const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const mongoOptions = {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    family: 4 // Use IPv4, skip trying IPv6
};

const connectDB = async () => {
    try {
        if (!process.env.MDB) {
            throw new Error('MDB environment variable is not defined');
        }

        await mongoose.connect(process.env.MDB, mongoOptions);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        
        if (error.name === 'MongooseServerSelectionError') {
            console.error("Please check if your IP address is whitelisted in MongoDB Atlas");
            console.error("Go to: https://cloud.mongodb.com -> Network Access -> Add IP Address");
        }
        process.exit(1); // Exit if cannot connect to database
    }
};

module.exports = connectDB;


    
