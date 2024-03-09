import express, { Request, Response } from "express";
import cors from "cors";

import { connect } from "./mongoConnect";
import { Profile, ClubSummary, EventDetail, Club, Member } from "ts-models";
import profiles from "./services/profiles";
import clubSummaries from "./services/club_summaries";
import clubs from "./services/clubs";
import members from "./services/members";
import events from "./services/events";
import credentials from "./services/credentials";
import { loginUser, registerUser } from "./auth";
import apiRouter from "./routes/api";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connecting to my database
connect("437Project");

// // Setting up the router for api endpoint calls;
// app.use("/api", apiRouter);

// Login to existing account
// Request Params: N/A
// Body: Credential
app.post("/login", loginUser);

// Register a new account
// Request Params: N/A
// Body: Credential
app.post("/signup", registerUser);


// Get profile
// Request Params: email
app.get("/api/profile/:email", (req: Request, res: Response) => {
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
app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

// Update profile
// Request Params: email
// Body: profile
app.put("/api/profile/:email", (req: Request, res: Response) => {
  const { email } = req.params;
  const newProfile = req.body;

  profiles
    .update(email, newProfile)
    .then((profile: Profile) => res.status(200).json(profile))
    .catch((err) => res.status(404).end());
});

// Add club summary
// Body: clubSummary
app.post("/api/clubSummaries", (req: Request, res: Response) => {
  const newClubSummary = req.body;

  clubSummaries
    .create(newClubSummary)
    .then((clubSummary: ClubSummary) => res.status(201).send(clubSummary))
    .catch((err) => res.status(500).send(err));
});

// Get club summary
// Request Params: name
app.get("/api/clubSummaries/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  clubSummaries
    .get(name)
    .then((clubSummary: ClubSummary) => res.json(clubSummary))
    .catch((err) => res.status(404).end());
});

// Get all club summaries
// Request Params: n/a
app.get("/api/clubSummaries", (req: Request, res: Response) => {
  clubSummaries
    .getAll()
    .then((clubSummaries: ClubSummary[]) => res.status(200).json(clubSummaries))
    .catch((err) => res.status(404).end());
});

// Add event
// Body: event
app.post("/api/events", (req: Request, res: Response) => {
  const newEvent = req.body;

  events
    .create(newEvent)
    .then((event: EventDetail) => res.status(201).send(event))
    .catch((err) => res.status(500).send(err));
});

// Get specific event
// Request Params: host, id
app.get("/api/events/:host/:_id", (req: Request, res: Response) => {
  const { host, _id } = req.params;

  events
    .get(host, _id)
    .then((event: EventDetail) => res.status(200).json(event))
    .catch((err) => res.status(404).end());
});

// Get all events
// Request Params: host
app.get("/api/events/:host", (req: Request, res: Response) => {
  const { host } = req.params;

  events
    .getAll(host)
    .then((events: EventDetail[]) => res.status(200).json(events))
    .catch((err) => res.status(404).end());
});

// Get club
// Request Params: n/a
app.get("/api/clubs/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  clubs
    .get(name)
    .then((club: Club) => res.status(200).json(club))
    .catch((err) => res.status(404).end());
});

// Add club
// Body: club
app.post("/api/clubs", (req: Request, res: Response) => {
  const newClub = req.body;

  clubs
    .create(newClub)
    .then((club: Club) => res.status(201).send(club))
    .catch((err) => res.status(500).send(err));
});

// Update club
// Request Params: name
// Body: club
app.put("/api/clubs/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const newClub = req.body;

  clubs
    .update(name, newClub)
    .then((club: Club) => res.status(200).json(club))
    .catch((err) => res.status(404).end());
});

// Get members for club
// Request Params: n/a
app.get("/api/members/:club_name", (req: Request, res: Response) => {
  const { club_name } = req.params;

  members
    .getAll(club_name)
    .then((members: Member[]) => res.status(200).json(members))
    .catch((err) => res.status(404).end());
});

// Add member
// Body: member
app.post("/api/members", (req: Request, res: Response) => {
  const newMember = req.body;

  members
    .create(newMember)
    .then((member: Member) => res.status(201).send(member))
    .catch((err) => res.status(500).send(err));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
