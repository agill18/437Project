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
var credential_exports = {};
__export(credential_exports, {
  default: () => credential_default
});
module.exports = __toCommonJS(credential_exports);
var import_mongoose = require("mongoose");
var validate = require("mongoose-validator");
const credentialSchema = new import_mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      validate: [
        validate({
          validator: "matches",
          arguments: /@calpoly\.edu$/,
          message: "Provided email is not a Cal Poly email."
        })
      ],
      unique: true
    },
    hashedPassword: {
      type: String,
      required: true
    }
  },
  { collection: "user_credentials" }
);
const credentialModel = (0, import_mongoose.model)("Credential ", credentialSchema);
var credential_default = credentialModel;
