import {
  FaUsers,
  FaCalendarCheck,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";

export default function SummaryCards({
  announcements,
}: {
  announcements: unknown[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      <div className="bg-white p-6 rounded shadow flex items-center gap-4">
        <FaUsers className="text-blue-600 text-3xl" />
        <div>
          <p className="text-sm text-gray-500">Total Employees</p>
          <h2 className="text-xl font-bold text-gray-800">132</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow flex items-center gap-4">
        <FaCalendarCheck className="text-green-600 text-3xl" />
        <div>
          <p className="text-sm text-gray-500">Present Today</p>
          <h2 className="text-xl font-bold text-gray-800">118</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow flex items-center gap-4">
        <FaCalendarAlt className="text-yellow-600 text-3xl" />
        <div>
          <p className="text-sm text-gray-500">On Leave</p>
          <h2 className="text-xl font-bold text-gray-800">8</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow flex items-center gap-4">
        <FaBullhorn className="text-red-500 text-3xl" />
        <div>
          <p className="text-sm text-gray-500">Open Announcements</p>
          <h2 className="text-xl font-bold text-gray-800">
            {announcements.length}
          </h2>
        </div>
      </div>
    </div>
  );
}
