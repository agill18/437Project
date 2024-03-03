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
var clubSummary_exports = {};
__export(clubSummary_exports, {
  default: () => clubSummary_default
});
module.exports = __toCommonJS(clubSummary_exports);
var import_mongoose = require("mongoose");
const clubSummarySchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true, trim: true }
  },
  { collection: "club_summaries" }
);
const ClubSummaryModel = (0, import_mongoose.model)("ClubSummary", clubSummarySchema);
var clubSummary_default = ClubSummaryModel;
