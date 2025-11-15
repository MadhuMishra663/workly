import { Schema, model, Document } from "mongoose";

export interface ILeavePolicy {
  type: string;
  daysPerYear: number;
  carryoverAllowed: boolean;
}

export interface ICompany extends Document {
  name: string;
  timezone: string;
  leavePolicies: ILeavePolicy[];
  createdAt: Date;
}

const LeavePolicySchema = new Schema<ILeavePolicy>({
  type: { type: String, required: true },
  daysPerYear: { type: Number, default: 0 },
  carryoverAllowed: { type: Boolean, default: false },
});

const CompanySchema = new Schema<ICompany>({
  name: { type: String, required: true, unique: true },
  timezone: { type: String, default: "UTC" },
  leavePolicies: [LeavePolicySchema],
  createdAt: { type: Date, default: Date.now },
});

export default model<ICompany>("Company", CompanySchema);
