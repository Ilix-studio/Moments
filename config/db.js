const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    //mongoose connect to mongoDB by passing parameter i.e db.
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected ..");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
