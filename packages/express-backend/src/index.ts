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

// Setting up the router for api endpoint calls;
app.use("/api", apiRouter);

// Login to existing account
// Request Params: N/A
// Body: Credential
app.post("/login", loginUser);

// Register a new account
// Request Params: N/A
// Body: Credential
app.post("/signup", registerUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
