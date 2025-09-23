const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
const mongooseConnect = async () => {
    try {
        if(!process.env.MONGO_URL) {
            error("MongoDB not found")
        }
        await mongoose.connect (
            process.env.MONGO_URL
        )
console.log("MongoDb connected")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
module.exports = mongooseConnect;