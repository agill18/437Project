import { EventDetail } from "ts-models";
import EventModel from "../models/event";

function get(host: String, name: String): Promise<EventDetail> {
  return EventModel.find({ host, name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Not Found for ${host}`;
    });
}

function getAll(host: String): Promise<EventDetail[]> {
  return EventModel.find({ })
    .then((list) => list)
    .catch(() => { throw `Unable to get events for ${host}`; });
}

function create(event: EventDetail): Promise<EventDetail> {
  const newEvent = new EventModel(event);
  return newEvent.save();
}

export default { get, getAll, create };