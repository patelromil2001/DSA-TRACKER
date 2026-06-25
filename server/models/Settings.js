const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true
    },

    problemsPerDay: {
      type: Number,
      default: 4,
      min: 1,
      max: 100
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Settings", SettingsSchema);