// /models/Activity.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ActivitySchema = new Schema({
    name: { type: String, required: true },
    description: String,
    category: String,
    website: String,
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }, 
    image: String,
    activityUrl: String
});

const ActivityItem = model("ActivityItem", ActivitySchema)

module.exports = ActivityItem;