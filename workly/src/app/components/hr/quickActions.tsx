import { FaUserPlus, FaCalendarCheck, FaBullhorn } from "react-icons/fa";

export default function QuickActions() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Quick Actions
      </h2>
      <div className="flex flex-col gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          <FaUserPlus /> Add New Employee
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          <FaCalendarCheck /> Schedule Meeting
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          <FaBullhorn /> Post Announcement
        </button>
      </div>
    </div>
  );
}
