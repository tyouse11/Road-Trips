// /config/db-connection.js

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// Connection string
const MONGO_URI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to MongoDB through Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.once("open", () => console.log("MongoDB connected: ", MONGO_URI));
db.on("close", () => console.log("MongoDB disconnected"));

module.exports = db;
