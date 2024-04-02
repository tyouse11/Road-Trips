// server.js

const express = require("express");
const dotenv = require("dotenv");
const destinations = require("./routes/destinations");
const activities = require("./routes/activities")
const mongoose = require("./config/db-connection");
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware enables backend to accept request from front end
app.use(cors());
// Configure the server to accept and parse JSON data.
app.use(express.json())
// Connecting the router to the server
app.use('/destinations', destinations);
app.use('/activities', activities);
// root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Global error handling middleware
app.use((err, req, res, next) => {
// Check if the error is a mongoose validation error
if (err.name === 'ValidationError') {
  const errors = Object.values(err.errors).map(error => error.message);
  return res.status(400).json({ error: 'Validation error', errors });
}

// Handle other types of errors
switch (err.name) {
  case 'UnauthorizedError':
    return res.status(401).json({ error: 'Unauthorized', message: 'Invalid token' });
  case 'NotFoundError':
    return res.status(404).json({ error: 'Not found', message: 'Resource not found' });
  default:
    console.error(err.stack);
    return res.status(500).json({ error: 'Internal server error', message: 'Something went wrong' });
}
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});