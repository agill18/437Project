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
import * as path from "path";
import { PathLike } from "node:fs";
import fs from "node:fs/promises";

connect("437Project");

const app = express();
const port = process.env.PORT || 3000;

const frontend = "lit-frontend";
let cwd = process.cwd();
let dist: PathLike | undefined;
let indexHtml: PathLike | undefined;

try {
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error: any) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}

console.log(`Serving ${frontend} from`, dist);

if (dist) app.use(express.static(dist.toString()));

app.use(express.json());
app.use(cors());
app.options("*", cors());

// Setting up the router for api endpoint calls;
app.post("/login", loginUser);
app.post("/signup", registerUser);

app.use("/api", apiRouter);

app.use("/stats", (req, res) => {
  res.send(
    `<h1>App is Up!</h1>
      <dl><dt>Working Directory</dt><dd>${cwd}</dd>
      <dt>Frontend dist</dt><dd>${dist}</dd>
      <dt>HTML served</dt><dd>${indexHtml}</dd></dl>
    `
  );
});

app.use("/app", (req, res) => {
  if (!indexHtml) {
    res
      .status(404)
      .send(
        `Not found; ${frontend} not available, running in ${cwd}`
      );
  } else {
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
      res.send(html)
    );
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
