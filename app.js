const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
