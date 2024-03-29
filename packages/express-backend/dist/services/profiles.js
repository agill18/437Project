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
var profiles_exports = {};
__export(profiles_exports, {
  default: () => profiles_default
});
module.exports = __toCommonJS(profiles_exports);
var import_profile = __toESM(require("../models/profile"));
function index() {
  return import_profile.default.find();
}
function get(email) {
  return import_profile.default.find({ email }).then((list) => list[0]).catch((err) => {
    throw `${email} Not Found`;
  });
}
function getAll() {
  return import_profile.default.find({}).then((list) => list).catch((err) => {
    throw `Profiles Not Found`;
  });
}
function create(profile) {
  const p = new import_profile.default(profile);
  return p.save();
}
function update(email, profile) {
  return new Promise((resolve, reject) => {
    import_profile.default.findOneAndUpdate({ email }, { $set: profile }, { new: true }).then((profile2) => {
      if (profile2)
        resolve(profile2);
      else
        reject("Failed to update profile");
    });
  });
}
var profiles_default = { index, get, create, update, getAll };
