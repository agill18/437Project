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
  return ClubSummaryModel.find({ })
    .then((list) => list)
    .catch((err) => {
      throw `Unable to get club summaries`;
    });
}

function create(clubSummary: ClubSummary): Promise<ClubSummary> {
  const newSummary = new ClubSummaryModel(clubSummary);
  return newSummary.save();
}

export default { get, getAll, create };