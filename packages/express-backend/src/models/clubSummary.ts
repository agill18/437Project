import { Schema, model } from "mongoose";
import { ClubSummary } from "ts-models";

const clubSummarySchema = new Schema<ClubSummary>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true, trim: true },
  },
  { collection: "club_summaries" }
);

const ClubSummaryModel = model<ClubSummary>("ClubSummary", clubSummarySchema);

export default ClubSummaryModel;