// /models/Destination.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const destinationSchema = new Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  direction: { type: String, required: true },
  description: String,
  coordinates: { type: [Number], required: true },
  distance: String,
  duration: String,
  image: String,
});

const Destination = model("Destination", destinationSchema);

module.exports = Destination;