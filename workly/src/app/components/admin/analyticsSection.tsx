import { FaChartBar, FaClock, FaUserCheck } from "react-icons/fa";

export default function AnalyticsSection() {
  const analytics = [
    {
      icon: <FaChartBar className="text-blue-600 text-3xl" />,
      title: "Average Attendance",
      value: "91%",
    },
    {
      icon: <FaClock className="text-green-600 text-3xl" />,
      title: "Avg Work Hours",
      value: "8.2 hrs",
    },
    {
      icon: <FaUserCheck className="text-yellow-600 text-3xl" />,
      title: "Employee Retention",
      value: "96%",
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Analytics Overview
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {analytics.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-blue-50 p-4 rounded"
          >
            {item.icon}
            <div>
              <p className="text-gray-600 text-sm">{item.title}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
