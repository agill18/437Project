import express, { Request, Response } from "express";
import { Event, EventDetail } from "ts-models";
import events from "../services/events";

const router = express.Router();

// Add event
// Body: event
router.post("/", (req: Request, res: Response) => {
  const newEvent = req.body;

  events
    .create(newEvent)
    .then((event: EventDetail) => res.status(201).send(event))
    .catch((err) => res.status(500).send(err));
});

// Get specific event
// Request Params: host, id
router.get("/:host/:_id", (req: Request, res: Response) => {
  const { host, _id } = req.params;

  events
    .get(host, _id)
    .then((event: EventDetail) => res.status(200).json(event))
    .catch((err) => res.status(404).end());
});

// Get all events
// Request Params: host
router.get("/:host", (req: Request, res: Response) => {
  const { host } = req.params;
    console.log("in get events")
  events
    .getAll(host)
    .then((events: EventDetail[]) => res.status(200).json(events))
    .catch((err) => res.status(404).end());
});

export default router;