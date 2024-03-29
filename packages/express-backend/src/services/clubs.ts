import { Club } from "ts-models";
import ClubModel from "../models/club";
import ClubSummaryModel from "../models/clubSummary";
import MemberModel from "../models/member";
import profiles from "./profiles";
import members from "./members";



function get(name: String): Promise<Club> {
  return ClubModel.find({ name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Club Not Found`;
    });
}

async function create(club: Club): Promise<Club> {
  const c = new ClubModel(club);

  // create new clubSummary as well when a new club is created
  const newSummary = new ClubSummaryModel({ name: club.name, description: club.concise_description});
  await newSummary.save();

  // set the creator of the club as the president
  const ownerProfile = await profiles.get(club.owner);
  await members.create({ name: ownerProfile.name, email: club.owner, club_name: club.name, role: "President" });

  return await c.save();
}

function update(name: String, club: Club): Promise<Club> {
  return new Promise((resolve, reject) => {
    ClubModel.findOneAndUpdate({ name }, club, {new: true,})
    .then((club) => {
      if (club) {
        ClubSummaryModel.findOneAndUpdate({ name }, { name: club.name, description: club.concise_description}, { new: true, })
        .then((clubSummary) => {
            if (clubSummary) resolve(club);
            else reject("Failed to update clubSummary");
        });
        resolve(club);
      }
      else reject("Failed to update profile");
    });
  });
}

export default { get, create, update };