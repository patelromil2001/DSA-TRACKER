const express = require("express");
const router = express.Router();

const DailyLog = require("../models/DailyLog");

// GET all logs
router.get("/", async (req, res) => {
  try {
    const logs = await DailyLog.find();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE or CREATE log
router.put("/:dayIndex", async (req, res) => {
  try {
    const dayIndex = Number(req.params.dayIndex);

    const updated = await DailyLog.findOneAndUpdate(
      { dayIndex },
      req.body,
      {
        upsert: true,
        new: true,
        runValidators: true
      }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;