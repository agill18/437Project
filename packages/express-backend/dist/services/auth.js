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
var auth_exports = {};
__export(auth_exports, {
  verify: () => verify
});
module.exports = __toCommonJS(auth_exports);
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_credential2 = __toESM(require("../models/mongo/credential"));
function verify(email, password) {
  return new Promise((resolve, reject) => {
    import_credential2.default.find({ email }).then((found) => {
      if (found && found.length === 1)
        return found[0];
      else
        reject("Invalid username or password");
    }).then((credsOnFile) => __async(this, null, function* () {
      if (credsOnFile) {
        const isValid = import_bcryptjs.default.compare(password, credsOnFile.hashedPassword);
        if (isValid) {
          console.log("Verified", isValid, credsOnFile.email);
          resolve(credsOnFile.email);
        } else {
          reject("Invalid username or password");
        }
      } else
        reject("Invalid username or password");
    }));
  });
}
function generateAccessToken(email) {
  console.log("Generating token for", email);
  const payload = { email };
  return new Promise((resolve, reject) => {
    import_jsonwebtoken.default.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: "1d" },
      (error, token) => {
        if (error)
          reject(error);
        else
          resolve(token);
      }
    );
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  verify
});
