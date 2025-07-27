require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const event = require("./models/Event");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB Error:", err));

// GET all
app.get("/api/events", async (req, res) => {
  const events = await event.find();
  res.json(events);
});

// GET one
app.get("/api/events/:id", async (req, res) => {
  const event = await event.findById(req.params.id);
  if (event) res.json(event);
  else res.status(404).json({ error: "Not found" });
});

// CREATE
app.post("/api/events", async (req, res) => {
  const newevent = new event(req.body);
  await newevent.save();
  res.status(201).json(newevent);
});

// UPDATE
app.put("/api/events/:id", async (req, res) => {
  await event.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

// DELETE
app.delete("/api/events/:id", async (req, res) => {
  await event.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
