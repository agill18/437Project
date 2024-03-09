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
var member_exports = {};
__export(member_exports, {
  default: () => member_default
});
module.exports = __toCommonJS(member_exports);
var import_mongoose = require("mongoose");
const memberSchema = new import_mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    club_name: { type: String, required: true, trim: true, default: "" },
    role: { type: String, trim: true, default: "member" }
  },
  { collection: "club_members" }
);
memberSchema.index({ email: 1, club_name: 1 }, { unique: true });
const MemberModel = (0, import_mongoose.model)("Member", memberSchema);
var member_default = MemberModel;
