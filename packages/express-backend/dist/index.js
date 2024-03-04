"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_profiles = __toESM(require("./services/profiles"));
var import_clubs = __toESM(require("./services/clubs"));
var import_auth = require("./auth");
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
app.use((0, import_cors.default)());
app.use(import_express.default.json());
(0, import_mongoConnect.connect)("437Project");
app.post("/login", import_auth.loginUser);
app.post("/signup", import_auth.registerUser);
app.get("/api/profile/:userId", (req, res) => {
  const { userId } = req.params;
  import_profiles.default.get(userId).then((profile) => res.status(200).json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
app.put("/api/profile/:email", (req, res) => {
  const { email } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(email, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/clubs", (req, res) => {
  const newClubSummary = req.body;
  import_clubs.default.create(newClubSummary).then((clubSummary) => res.status(201).send(clubSummary)).catch((err) => res.status(500).send(err));
});
app.get("/api/clubs/:name", (req, res) => {
  const { name } = req.params;
  import_clubs.default.get(name).then((clubSummary) => res.json(clubSummary)).catch((err) => res.status(404).end());
});
app.get("/api/clubs", (req, res) => {
  import_clubs.default.getAll().then((clubSummaries) => res.status(200).json(clubSummaries)).catch((err) => res.status(404).end());
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
