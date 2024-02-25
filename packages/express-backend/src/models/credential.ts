import { Schema, model } from "mongoose";
import { Credential } from "ts-models";
var validate = require('mongoose-validator');

const credentialSchema = new Schema<Credential>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      validate: [
            validate({
                validator: 'matches',
                arguments: /@calpoly\.edu$/,
                message: 'Provided email is not a Cal Poly email.'
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

const credentialModel = model<Credential>("Credential ", credentialSchema);

export default credentialModel;