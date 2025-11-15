import { Schema, model, Document, Types } from "mongoose";

export interface IHoliday extends Document {
  company: Types.ObjectId;
  title: string;
  date: Date;
  recurring: boolean;
  createdAt: Date;
}

const HolidaySchema = new Schema<IHoliday>({
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  recurring: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default model<IHoliday>("Holiday", HolidaySchema);
