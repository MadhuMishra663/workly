interface HolidayListProps {
  holidays: { date: string; name: string }[];
}

export default function HolidayList({ holidays }: HolidayListProps) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Holiday List</h2>
      <ul className="text-gray-700 text-sm space-y-1">
        {holidays.map((h) => (
          <li key={h.date} className="flex justify-between">
            <span>{h.name}</span>
            <span className="text-gray-500">{h.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
