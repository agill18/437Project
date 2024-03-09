import { Profile } from "ts-models";
import ProfileModel from "../models/profile";

function index(): Promise<Profile[]> {
  return ProfileModel.find();
}

function get(email: String): Promise<Profile> {
  return ProfileModel.find({ email })
    .then((list) => list[0])
    .catch((err) => {
      throw `${email} Not Found`;
    });
}

function getAll(): Promise<Profile[]> {
  return ProfileModel.find({ })
    .then((list) => list)
    .catch((err) => {
      throw `Profiles Not Found`;
    });
}

function create(profile: Profile): Promise<Profile> {
  const p = new ProfileModel(profile);
  return p.save();
}

function update(email: String, profile: Profile): Promise<Profile> {
  return new Promise((resolve, reject) => {
    ProfileModel.findOneAndUpdate({ email }, { $set: profile}, {new: true,})
    .then((profile) => {
      if (profile) resolve(profile);
      else reject("Failed to update profile");
    });
  });
}

export default { index, get, create, update, getAll };