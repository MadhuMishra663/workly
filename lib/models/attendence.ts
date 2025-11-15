import { Schema, model, Document, Types } from "mongoose";

export interface IAttendance extends Document {
  company: Types.ObjectId;
  user: Types.ObjectId;
  date: Date;
  status: "present" | "absent" | "half-day" | "on-leave";
  clockIn?: Date;
  clockOut?: Date;
  createdAt: Date;
}

const AttendanceSchema = new Schema<IAttendance>({
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["present", "absent", "half-day", "on-leave"],
    default: "present",
  },
  clockIn: Date,
  clockOut: Date,
  createdAt: { type: Date, default: Date.now },
});

AttendanceSchema.index({ user: 1, date: 1 }, { unique: true });

export default model<IAttendance>("Attendance", AttendanceSchema);
