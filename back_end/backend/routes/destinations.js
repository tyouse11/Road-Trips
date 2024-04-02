// /routes/destinations.js

const express = require("express");
const Destination = require("../models/Destination");
const destinations = require("../data/destinations");


const router = express.Router();

// Delete all destinations
router.delete('/delete-all', async (req, res) => {
  try {
    // Delete all destinations from the database
    const result = await Destination.deleteMany({});
    res.status(200).json({ message: "All destinations deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to delete destinations");
  }
});

// Insert Destinations Data into MongoDB
router.post('/insert-destinations', async (req, res) => {
  try {
    // Check if destinations already exist in the database
    const existingDestinations = await Destination.find();
    console.log("Existing Destinations:", existingDestinations);

    if (existingDestinations.length > 0) {
      // Destinations already exist, return a message indicating that insertion is not needed
      return res.status(200).json({ message: "Destinations already inserted" });
    }

    // Insert destinations only if they don't exist already
    const result = await Destination.insertMany(destinations);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to Add Destinations");
  }
});

// POST a new destination
router.post('/', async (req, res) => {
  const destination = new Destination(req.body);
  try {
    const newDestination = await destination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all destinations
router.get('/', async (req, res) => {
try {
  const destinations = await Destination.find().limit(50).exec();
  res.status(200).json({
    destinations: destinations
  });
} catch (error) {
  console.error("Error fetching data:", error);
  res.status(500).json({ error: "Unable to find destinations" });
}
});

// Get a single destination by id
router.get("/:id", async (req, res) => {
  try {
    let destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json( { error: "Destination Not Found"} );
    }
    res.status(200).json({
      data: destination
    })
  } catch (error) {
    console.error;
    res.status(500).send("Internal Server Error")
  }
});

  // Update a destination by ID
  router.put("/:id", async (req, res) => {
    try {
      const destinationId = req.params.id;
      const { name, state, direction, description, coordinates, distance, duration, image, map } = req.body;
  
      // Find the destination by ID and update it
      const updatedDestination = await Destination.findByIdAndUpdate(destinationId, { name, state, direction, description, coordinates, distance, duration, image, map }, { new: true });
  
      if (!updatedDestination) {
        return res.status(404).json({ error: "Destination not found" });
      }
  
      res.status(200).json(updatedDestination);
    } catch (error) {
      console.error("Error updating destination:", error);
      res.status(500).json({ error: "Error Updating Destination" });
    }
  });

    // Delete a destination by ID
    router.delete("/:id", async (req, res) => {
      await Destination.findByIdAndDelete(req.params.id)
      res.status(204).json({
        data: "Destination has been deleted"
      })
    })

module.exports = router; 