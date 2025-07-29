const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", dataSchema);
