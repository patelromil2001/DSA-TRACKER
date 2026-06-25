const express = require("express");
const router = express.Router();

const Settings = require("../models/Settings");

// GET settings
router.get("/", async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create({
        startDate: new Date().toISOString(),
        problemsPerDay: 4
      });
    }

    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE settings
router.put("/", async (req, res) => {
  try {
    const updated = await Settings.findOneAndUpdate(
      {},
      req.body,
      { upsert: true, new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;