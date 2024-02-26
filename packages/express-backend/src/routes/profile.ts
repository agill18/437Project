import express, { Request, Response } from "express";
import { Profile } from "ts-models";
import profiles from "../services/profiles";

const router = express.Router();

// Get profile
// Request Params: userId
router.get("/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
 
  profiles
    .get(userId)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

// Add profile
// Body: profile
router.post("/", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

// Update profile
// Request Params: userId
// Body: profile
router.put("/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
  const newProfile = req.body;

  profiles
    .update(userId, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

export default router;