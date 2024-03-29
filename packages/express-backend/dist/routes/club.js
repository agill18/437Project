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
var club_exports = {};
__export(club_exports, {
  default: () => club_default
});
module.exports = __toCommonJS(club_exports);
var import_express = __toESM(require("express"));
var import_clubs = __toESM(require("../services/clubs"));
const router = import_express.default.Router();
router.get("/:name", (req, res) => {
  const { name } = req.params;
  import_clubs.default.get(name).then((club) => res.status(200).json(club)).catch((err) => res.status(404).end());
});
router.post("/", (req, res) => {
  const newClub = req.body;
  import_clubs.default.create(newClub).then((club) => res.status(201).send(club)).catch((err) => res.status(500).send(err));
});
router.put("/:name", (req, res) => {
  const { name } = req.params;
  const newClub = req.body;
  import_clubs.default.update(name, newClub).then((club) => res.status(200).json(club)).catch((err) => res.status(404).end());
});
var club_default = router;
