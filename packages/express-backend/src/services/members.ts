import { Member } from "ts-models";
import MemberModel from "../models/member";
import profiles from "./profiles";


function getAll(club_name: String): Promise<Member[]> {
  return MemberModel.find({ club_name })
    .then((list) => list)
    .catch((err) => {
      throw `${club_name} Not Found`;
    });
}

async function create(member: Member): Promise<Member> {
  // Delete another entry in the members table for the same club if it exists
  await deleteOne(member.email, member.club_name);
  const memberClubs = (await profiles.get(member.email)).clubs || []
  await profiles.update(member.email, {clubs: [...memberClubs, member.club_name]})
  const p = new MemberModel(member);
  return p.save();
}

async function deleteOne(email: String, club_name: String): Promise<void> {
  let memberClubs = (await profiles.get(email)).clubs || []
  memberClubs = memberClubs.filter(club => club !== club_name);
  await profiles.update(email, {clubs: memberClubs})

  return new Promise((resolve, reject) => {
    MemberModel.deleteOne({ email, club_name })
    .then((member) => {
      if (member) resolve();
      else reject("Failed to delete member");
    })
    .catch(() => reject());
  });
}

export default { getAll, create, deleteOne };