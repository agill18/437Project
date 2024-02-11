import express, { Request, Response } from "express";
import cors from "cors";

import { connect } from "./mongoConnect";
import { Profile } from "./models/profile";
import profiles from "./profiles";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connecting to my database
connect("437Project");

// Get profile
// Request Params: userId
app.get("/api/profile/:userid", (req: Request, res: Response) => {
  const { userId } = req.params;

  profiles
    .get(userId)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

// Add profile
// Body: profile
app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});