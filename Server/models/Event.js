const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventname: { type: String, required: true },
  venue: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
