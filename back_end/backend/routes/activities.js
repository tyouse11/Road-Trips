// routes/activities.js

const express = require("express");
const Activity = require("../models/Activity");
const activities = require("../data/activities");

const router = express.Router();

// Delete all destinations
router.delete('/delete-all', async (req, res) => {
  try {
    // Delete all destinations from the database
    const result = await Activity.deleteMany({});
    res.status(200).json({ message: "All activities deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to delete activities");
  }
});

// Insert Activities Data into MongoDB
router.post('/insert-all', async (req, res) => {
    try {
      // Check if destinations already exist in the database
      const existingActivities = await Activity.find();
      console.log("Existing Activities:", existingActivities);
  
      if (existingActivities.length > 0) {
        // Destinations already exist, return a message indicating that insertion is not needed
        return res.status(200).json({ message: "Activities already inserted" });
      }
  
      // Insert destinations only if they don't exist already
      const result = await Activity.insertMany(activities);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Unable to Add Activities");
    }
  });

// GET all activities
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching activities" });
  }
});

router.get('/:destinationId/', async (req, res) => {
  const { destinationId } = req.params;
  try {
    const activities = await Activity.find({ destination: destinationId });
    res.json({ activities });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching activities' });
  }
});

// POST a new activity
router.post("/", async (req, res) => {
  const activity = new Activity(req.body);
  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT/update an activity by ID
router.put("/:id", async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE an activity by ID
router.delete("/:id", async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
