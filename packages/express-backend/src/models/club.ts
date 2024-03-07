// import { Schema, model } from "mongoose";
// import { Club } from "ts-models";

// const clubSchema = new Schema<Club>(
//   {
//     name: { type: String, required: true, trim: true, unique: true },
//     description: { type: String, required: true, trim: true },
//     contact: { type: String, required: true, trim: true },
//     contact: { type: String, required: true, trim: true },

//   },
//   { collection: "club_summaries" }
// );

// const ClubSummaryModel = model<ClubSummary>("ClubSummary", clubSummarySchema);

// export default ClubSummaryModel;

// export interface Club {
//   description: string, 
//   contact: string,
//   additionalInfo: AdditionalInfo
// }

// export interface AdditionalInfo {
//   days: string, 
//   start_time: string,
//   end_time: string, 
//   location: string,
//   tags: string[]
// }