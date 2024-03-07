"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var event_exports = {};
__export(event_exports, {
  default: () => event_default
});
module.exports = __toCommonJS(event_exports);
var import_mongoose = require("mongoose");
const eventSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    start_time: { type: String, required: true, trim: true },
    end_time: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    event_contact: { type: String, required: true, trim: true },
    host: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    expireAt: { type: Date, required: true, trim: true }
  },
  { collection: "club_events" }
);
eventSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
eventSchema.index({ name: 1, host: 1 }, { unique: true });
const EventModel = (0, import_mongoose.model)("Event", eventSchema);
var event_default = EventModel;
