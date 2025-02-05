import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  date: { type: Date, required: true, default: Date.now },
  location: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  isFree: { type: Boolean, default: false },
});

export const Event = mongoose.model("Event", eventSchema);
