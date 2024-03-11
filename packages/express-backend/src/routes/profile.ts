import express, { Request, Response } from "express";
import { Profile } from "ts-models";
import profiles from "../services/profiles";

const router = express.Router();

// Get profile
// Request Params: email
router.get("/:email", (req: Request, res: Response) => {
  console.log("got get request");
  const { email } = req.params;
  if (email !== "all") {
    profiles
      .get(email)
      .then((profile: Profile) => res.status(200).json(profile))
      .catch((err) => res.status(404).end());
  } else {
    profiles
      .getAll()
      .then((profiles: Profile[]) => res.status(200).json(profiles))
      .catch((err) => res.status(404).end());
  }
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
router.put("/:email", (req: Request, res: Response) => {
  const { email } = req.params;
  const newProfile = req.body;

  profiles
    .update(email, newProfile)
    .then((profile: Profile) => res.status(200).json(profile))
    .catch((err) => res.status(404).end());
});

export default router;