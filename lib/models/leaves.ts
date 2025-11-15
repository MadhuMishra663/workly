import { Schema, model, Document, Types } from "mongoose";

export interface ILeave extends Document {
  company: Types.ObjectId;
  user: Types.ObjectId;
  type: string;
  startDate: Date;
  endDate: Date;
  days: number;
  reason?: string;
  status: "pending" | "approved" | "rejected" | "cancelled";
  requestedAt: Date;
  decidedAt?: Date;
  decidedBy?: Types.ObjectId;
}

const LeaveSchema = new Schema<ILeave>({
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  days: { type: Number, required: true },
  reason: String,
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "cancelled"],
    default: "pending",
  },
  requestedAt: { type: Date, default: Date.now },
  decidedAt: Date,
  decidedBy: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model<ILeave>("Leave", LeaveSchema);
