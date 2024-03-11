import express, { Request, Response } from "express";
import { Member } from "ts-models";
import members from "../services/members";

const router = express.Router();

// Get members for club
// Request Params: n/a
router.get("/:club_name", (req: Request, res: Response) => {
  const { club_name } = req.params;

  members
    .getAll(club_name)
    .then((members: Member[]) => res.status(200).json(members))
    .catch((err) => res.status(404).end());
});

// Add member
// Body: member
router.post("/", (req: Request, res: Response) => {
  const newMember = req.body;

  members
    .create(newMember)
    .then((member: Member) => res.status(201).send(member))
    .catch((err) => res.status(500).send(err));
});

// Delete member
// Body: member
router.post("/delete/:club_name/:email", (req: Request, res: Response) => {
  const { email, club_name } = req.params;

  members
    .deleteOne(email, club_name)
    .then(() => res.status(201).send())
    .catch((err) => res.status(500).send(err));
});


export default router;