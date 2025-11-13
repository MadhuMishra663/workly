interface Holiday {
  date: string;
  name: string;
}

export default function UpcomingHolidays({
  holidays,
}: {
  holidays: Holiday[];
}) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Upcoming Holidays
      </h2>
      <ul className="text-sm text-gray-700 space-y-2">
        {holidays.map((h) => (
          <li key={h.date} className="flex justify-between border-b pb-1">
            <span>{h.name}</span>
            <span className="text-gray-500">{h.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
