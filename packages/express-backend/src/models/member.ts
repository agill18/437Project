import { Schema, model } from "mongoose";
import { Member } from "ts-models";

const memberSchema = new Schema<Member>(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    club_name: { type: String, required: true, trim: true, default: '' },
    role: { type: String, trim: true, default: 'member'},
  },
  { collection: "club_members" }
);

memberSchema.index({ email: 1, club_name: 1 }, { unique: true });

const MemberModel = model<Member>("Member", memberSchema);

export default MemberModel;