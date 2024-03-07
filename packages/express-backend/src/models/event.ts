import { Schema, model } from "mongoose";
import { EventDetail } from "ts-models";

const eventSchema = new Schema<EventDetail>(
  {
    name: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    start_time: { type: String, required: true, trim: true },
    end_time: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    event_contact: { type: String, required: true, trim: true },
    host: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    expireAt: { type: Date, required: true, trim: true }
  },
  { collection: "club_events" }
);

// Automatically deletes documents whose end time have passed
eventSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
eventSchema.index({ name: 1, host: 1 }, { unique: true });

const EventModel = model<EventDetail>("Event", eventSchema);

export default EventModel;
