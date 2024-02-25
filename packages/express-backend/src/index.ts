import express, { Request, Response } from "express";
import cors from "cors";

import { connect } from "./mongoConnect";
import { Profile } from "ts-models";
import profiles from "./services/profiles";
import credentials from "./services/credentials";
import { loginUser, registerUser } from "./auth";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connecting to my database
connect("437Project");

// Get profile
// Request Params: userId
app.get("/api/profile/:userId", (req: Request, res: Response) => {
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

// Update profile
// Request Params: userId
// Body: profile
app.put("/api/profile/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
  const newProfile = req.body;

  profiles
    .update(userId, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});


// Login to existing account
// Request Params: N/A
// Body: Credential
app.post("/api/login", loginUser);

// Register a new account
// Request Params: N/A
// Body: Credential
app.post("/api/signup", registerUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});