
import express, { Request, Response } from "express";
import { Club } from "ts-models";
import clubs from "../services/clubs";

const router = express.Router();

// Get club
// Request Params: n/a
router.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  clubs
    .get(name)
    .then((club: Club) => res.status(200).json(club))
    .catch((err) => res.status(404).end());
});

// Add club
// Body: club
router.post("/", (req: Request, res: Response) => {
  const newClub = req.body;

  clubs
    .create(newClub)
    .then((club: Club) => res.status(201).send(club))
    .catch((err) => res.status(500).send(err));
});

// Update club
// Request Params: name
// Body: club
router.put("/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const newClub = req.body;

  clubs
    .update(name, newClub)
    .then((club: Club) => res.status(200).json(club))
    .catch((err) => res.status(404).end());
});

export default router;