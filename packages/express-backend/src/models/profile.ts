import { Schema, model } from "mongoose";
import { Profile } from "ts-models";

const profileSchema = new Schema<Profile>(
  {
    userId: { type: String, trim: true, default: '' },
    name: { type: String, trim: true, default: '' },
    email: { type: String, required: true, trim: true, unique: true },
    pronouns: { type: String, trim: true, default: '' },
    major: { type: String, trim: true, default: ''},
    clubs: { type: [String], default: []}
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;