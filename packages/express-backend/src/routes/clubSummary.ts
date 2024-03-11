import express, { Request, Response } from "express";
import { ClubSummary } from "ts-models";
import clubSummaries from "../services/club_summaries";

const router = express.Router();

// Add club summary
// Body: clubSummary
router.post("/", (req: Request, res: Response) => {
  const newClubSummary = req.body;

  clubSummaries
    .create(newClubSummary)
    .then((clubSummary: ClubSummary) => res.status(201).send(clubSummary))
    .catch((err) => res.status(500).send(err));
});

// Get club summary
// Request Params: name
router.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  clubSummaries
    .get(name)
    .then((clubSummary: ClubSummary) => res.json(clubSummary))
    .catch((err) => res.status(404).end());
});

// Get all club summaries
// Request Params: n/a
router.get("/", (req: Request, res: Response) => {
  clubSummaries
    .getAll()
    .then((clubSummaries: ClubSummary[]) => res.status(200).json(clubSummaries))
    .catch((err) => res.status(404).end());
});

export default router;