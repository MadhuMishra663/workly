import { FaUsers, FaUserTie, FaBuilding, FaChartLine } from "react-icons/fa";

export default function AdminStats() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-600 text-3xl" />,
      title: "Total Employees",
      value: "132",
    },
    {
      icon: <FaUserTie className="text-green-600 text-3xl" />,
      title: "Total HRs",
      value: "5",
    },
    {
      icon: <FaBuilding className="text-yellow-600 text-3xl" />,
      title: "Departments",
      value: "8",
    },
    {
      icon: <FaChartLine className="text-red-600 text-3xl" />,
      title: "Attendance Rate",
      value: "91%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded shadow flex items-center gap-4"
        >
          {s.icon}
          <div>
            <p className="text-sm text-gray-500">{s.title}</p>
            <h2 className="text-xl font-bold text-gray-800">{s.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
