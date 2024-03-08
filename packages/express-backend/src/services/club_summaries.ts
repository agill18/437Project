import { ClubSummary } from "ts-models";
import ClubSummaryModel from "../models/clubSummary";

function get(name: String): Promise<ClubSummary> {
  return ClubSummaryModel.find({ name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Not Found`;
    });
}

function getAll(): Promise<ClubSummary[]> {
  return ClubSummaryModel.find({ }).sort({ name: 1 })
    .then((list) => list)
    .catch((err) => {
      throw `Unable to get club summaries`;
    });
}

function create(clubSummary: ClubSummary): Promise<ClubSummary> {
  const newSummary = new ClubSummaryModel(clubSummary);
  return newSummary.save();
}

function update(name: String, clubSummary: ClubSummary): Promise<ClubSummary> {
  return new Promise((resolve, reject) => {
    ClubSummaryModel.findOneAndUpdate({ name }, clubSummary, {
      new: true,
    }).then((clubSummary) => {
      if (clubSummary) resolve(clubSummary);
      else reject("Failed to update clubSummary");
    });
  });
}

export default { get, getAll, create, update };