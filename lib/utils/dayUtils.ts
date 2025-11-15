import dayjs from "dayjs";

export const countInclusiveDays = (start: Date, end: Date) => {
  const s = dayjs(start).startOf("day");
  const e = dayjs(end).startOf("day");
  return e.diff(s, "day") + 1;
};
