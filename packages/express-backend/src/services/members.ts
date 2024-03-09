import { Member } from "ts-models";
import MemberModel from "../models/member";

function getAll(club_name: String): Promise<Member[]> {
  return MemberModel.find({ club_name })
    .then((list) => list)
    .catch((err) => {
      throw `${club_name} Not Found`;
    });
}

function create(member: Member): Promise<Member> {
  const p = new MemberModel(member);
  return p.save();
}

function deleteOne(email: String, club_name: String): Promise<void> {
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