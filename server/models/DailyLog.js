const mongoose = require("mongoose");

const DailyLogSchema = new mongoose.Schema(
  {
    dayIndex: {
      type: Number,
      required: true,
      unique: true
    },

    routine: {
      type: [Boolean],
      default: Array(12).fill(false)
    },

    notes: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("DailyLog", DailyLogSchema);