const mongoose = require("mongoose");
const config = require("config");

require("dotenv").config();

// Get password from env and replace within mongoURI
// db = config.get('mongoURI').replace('<password>', process.env.MONGODB_PASSWORD);
db = config.get("MONGODB_URI");
const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
