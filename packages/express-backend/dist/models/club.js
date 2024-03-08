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
var club_exports = {};
__export(club_exports, {
  default: () => club_default
});
module.exports = __toCommonJS(club_exports);
var import_mongoose = require("mongoose");
const clubSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    detailed_description: { type: String, required: true, trim: true },
    concise_description: { type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    days: { type: String, trim: true, default: "TBD" },
    start_time: { type: String, trim: true, default: "TBD" },
    end_time: { type: String, trim: true, default: "TBD" },
    location: { type: String, trim: true, default: "TBD" },
    tags: { type: [String], required: false, trim: true }
  },
  { collection: "club_directory" }
);
const ClubModel = (0, import_mongoose.model)("Club", clubSchema);
var club_default = ClubModel;
