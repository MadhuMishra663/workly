import { Schema, model, Document, Types } from "mongoose";
import { ESTATUS } from "../utils/enums/enums";

export interface ILeaveBalance {
  type: string;
  totalAllocated: number;
  used: number;
}

export interface IUser extends Document {
  company: Types.ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  role: "employee" | "hr" | "admin";
  leaveBalances: ILeaveBalance[];
  createdAt: Date;
  status: string;
}

const LeaveBalanceSchema = new Schema<ILeaveBalance>({
  type: { type: String, required: true },
  totalAllocated: { type: Number, default: 0 },
  used: { type: Number, default: 0 },
});

const UserSchema = new Schema<IUser>({
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["employee", "hr", "admin"],
    default: "employee",
  },
  status: {
    type: String,
    required: true,
    default: ESTATUS.ACTIVE,
  },
  leaveBalances: [LeaveBalanceSchema],
  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>("User", UserSchema);
