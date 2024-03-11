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
var member_exports = {};
__export(member_exports, {
  default: () => member_default
});
module.exports = __toCommonJS(member_exports);
var import_express = __toESM(require("express"));
var import_members = __toESM(require("../services/members"));
const router = import_express.default.Router();
router.get("/:club_name", (req, res) => {
  const { club_name } = req.params;
  import_members.default.getAll(club_name).then((members2) => res.status(200).json(members2)).catch((err) => res.status(404).end());
});
router.post("/", (req, res) => {
  const newMember = req.body;
  import_members.default.create(newMember).then((member) => res.status(201).send(member)).catch((err) => res.status(500).send(err));
});
router.post("/delete/:club_name/:email", (req, res) => {
  const { email, club_name } = req.params;
  import_members.default.deleteOne(email, club_name).then(() => res.status(201).send()).catch((err) => res.status(500).send(err));
});
var member_default = router;
