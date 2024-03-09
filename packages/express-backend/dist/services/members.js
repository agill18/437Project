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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var members_exports = {};
__export(members_exports, {
  default: () => members_default
});
module.exports = __toCommonJS(members_exports);
var import_member = __toESM(require("../models/member"));
var import_profiles = __toESM(require("./profiles"));
function getAll(club_name) {
  return import_member.default.find({ club_name }).then((list) => list).catch((err) => {
    throw `${club_name} Not Found`;
  });
}
function create(member) {
  return __async(this, null, function* () {
    yield deleteOne(member.email, member.club_name);
    const memberClubs = (yield import_profiles.default.get(member.email)).clubs || [];
    yield import_profiles.default.update(member.email, { clubs: [...memberClubs, member.club_name] });
    const p = new import_member.default(member);
    return p.save();
  });
}
function deleteOne(email, club_name) {
  return __async(this, null, function* () {
    let memberClubs = (yield import_profiles.default.get(email)).clubs || [];
    memberClubs = memberClubs.filter((club) => club !== club_name);
    yield import_profiles.default.update(email, { clubs: memberClubs });
    return new Promise((resolve, reject) => {
      import_member.default.deleteOne({ email, club_name }).then((member) => {
        if (member)
          resolve();
        else
          reject("Failed to delete member");
      }).catch(() => reject());
    });
  });
}
var members_default = { getAll, create, deleteOne };
