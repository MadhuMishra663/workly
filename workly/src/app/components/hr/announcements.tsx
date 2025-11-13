interface Announcement {
  id: number;
  title: string;
  message: string;
  date: string;
}

export default function Announcements({
  announcements,
}: {
  announcements: Announcement[];
}) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Announcements
      </h2>
      <ul className="space-y-3">
        {announcements.map((a) => (
          <li key={a.id} className="border-l-4 border-blue-500 pl-3">
            <h3 className="font-semibold text-gray-800">{a.title}</h3>
            <p className="text-sm text-gray-600">{a.message}</p>
            <p className="text-xs text-gray-400 mt-1">{a.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
