import { Document } from "mongoose";
import { Profile } from "./models/profile";
import ProfileModel from "./models/mongo/profile";

function index(): Promise<Profile[]> {
  return ProfileModel.find();
}

function get(userId: String): Promise<Profile> {
  return ProfileModel.find({ userId })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userId} Not Found`;
    });
}

function create(profile: Profile): Promise<Profile> {
  const p = new ProfileModel(profile);
  return p.save();
}

function update(userId: String, profile: Profile): Promise<Profile> {
  return new Promise((resolve, reject) => {
    ProfileModel.findOneAndUpdate({ userId }, profile, {
      new: true,
    }).then((profile) => {
      if (profile) resolve(profile);
      else reject("Failed to update profile");
    });
  });
}

export default { index, get, create, update };