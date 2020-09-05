const mongoose = require("mongoose");

const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jyzo4.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
