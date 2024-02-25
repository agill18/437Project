import { Schema, model } from "mongoose";
import { Profile } from "ts-models";

const profileSchema = new Schema<Profile>(
  {
    userId: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    pronouns: { type: String, trim: true },
    major: { type: String, trim: true },
    clubs: [String]
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;