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
var event_exports = {};
__export(event_exports, {
  default: () => event_default
});
module.exports = __toCommonJS(event_exports);
var import_express = __toESM(require("express"));
var import_events = __toESM(require("../services/events"));
const router = import_express.default.Router();
router.post("/", (req, res) => {
  const newEvent = req.body;
  import_events.default.create(newEvent).then((event) => res.status(201).send(event)).catch((err) => res.status(500).send(err));
});
router.get("/:host/:_id", (req, res) => {
  const { host, _id } = req.params;
  import_events.default.get(host, _id).then((event) => res.status(200).json(event)).catch((err) => res.status(404).end());
});
router.get("/:host", (req, res) => {
  const { host } = req.params;
  console.log("in get events");
  import_events.default.getAll(host).then((events2) => res.status(200).json(events2)).catch((err) => res.status(404).end());
});
var event_default = router;
