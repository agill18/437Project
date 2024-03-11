"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default
});
module.exports = __toCommonJS(profile_exports);
var import_express = __toESM(require("express"));
var import_profiles = __toESM(require("../services/profiles"));
const router = import_express.default.Router();
router.get("/:email", (req, res) => {
  console.log("got get request");
  const { email } = req.params;
  if (email !== "all") {
    import_profiles.default.get(email).then((profile) => res.status(200).json(profile)).catch((err) => res.status(404).end());
  } else {
    import_profiles.default.getAll().then((profiles2) => res.status(200).json(profiles2)).catch((err) => res.status(404).end());
  }
});
router.post("/", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
router.put("/:email", (req, res) => {
  const { email } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(email, newProfile).then((profile) => res.status(200).json(profile)).catch((err) => res.status(404).end());
});
var profile_default = router;
