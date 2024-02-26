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
var credentials_exports = {};
__export(credentials_exports, {
  createCredential: () => createCredential,
  default: () => credentials_default
});
module.exports = __toCommonJS(credentials_exports);
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_credential = __toESM(require("../models/credential"));
function verify(email, password) {
  return new Promise((resolve, reject) => {
    import_credential.default.find({ email }).then((found) => {
      if (found && found.length === 1)
        return found[0];
      else
        reject("Invalid username or password");
    }).then((credsOnFile) => __async(this, null, function* () {
      if (credsOnFile) {
        const isValid = yield import_bcryptjs.default.compare(password, credsOnFile.hashedPassword);
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
function createCredential(email, password) {
  return __async(this, null, function* () {
    const salt = yield import_bcryptjs.default.genSalt(10);
    const hashedPassword = yield import_bcryptjs.default.hash(password, salt);
    const credential = new import_credential.default({ email, hashedPassword });
    console.log("credential", credential);
    return yield credential.save();
  });
}
var credentials_default = { verify, createCredential };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCredential
});
