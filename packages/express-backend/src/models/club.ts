import { Schema, model } from "mongoose";
import { Club } from "ts-models";

const clubSchema = new Schema<Club>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    detailed_description: { type: String, required: true, trim: true },
    concise_description: { type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    days: { type: String, trim: true, default: 'TBD' },
    start_time: { type: String, trim: true, default: 'TBD' },
    end_time: { type: String, trim: true, default: 'TBD' },
    location: { type: String, trim: true, default: 'TBD' },
    tags: { type: [String], required: false, trim: true },

  },
  { collection: "club_directory" }
);

const ClubModel = model<Club>("Club", clubSchema);

export default ClubModel;