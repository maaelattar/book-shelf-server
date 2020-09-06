const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  isbn: {
    type: String,
    required: [true, "ISBN is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  description: {
    type: String,
  },
  published_date: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
