"use client";
import { useState } from "react";

type Leave = {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
};

export default function LeaveSection() {
  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [leaveForm, setLeaveForm] = useState({
    type: "Casual Leave",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leaveForm.startDate || !leaveForm.endDate || !leaveForm.reason) {
      alert("Please fill all leave details.");
      return;
    }
    setLeaves((prev) => [...prev, { id: Date.now(), ...leaveForm }]);
    setLeaveForm({
      type: "Casual Leave",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        Apply for Leave
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <select
          value={leaveForm.type}
          onChange={(e) => setLeaveForm({ ...leaveForm, type: e.target.value })}
          className="border border-gray-300 rounded w-full p-2"
        >
          <option>Casual Leave</option>
          <option>Sick Leave</option>
          <option>Paid Leave</option>
        </select>

        <input
          type="date"
          value={leaveForm.startDate}
          onChange={(e) =>
            setLeaveForm({ ...leaveForm, startDate: e.target.value })
          }
          className="border border-gray-300 rounded w-full p-2"
        />
        <input
          type="date"
          value={leaveForm.endDate}
          onChange={(e) =>
            setLeaveForm({ ...leaveForm, endDate: e.target.value })
          }
          className="border border-gray-300 rounded w-full p-2"
        />
        <textarea
          placeholder="Reason for leave"
          value={leaveForm.reason}
          onChange={(e) =>
            setLeaveForm({ ...leaveForm, reason: e.target.value })
          }
          className="border border-gray-300 rounded w-full p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Leave
        </button>
      </form>

      {leaves.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-blue-700">Applied Leaves</h3>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            {leaves.map((leave) => (
              <li key={leave.id} className="border-b border-gray-200 pb-1">
                {leave.type} ({leave.startDate} → {leave.endDate})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
