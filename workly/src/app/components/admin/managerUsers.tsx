"use client";

import { useState } from "react";

export default function ManageUsers() {
  const [hrs] = useState([
    {
      id: 1,
      name: "Emily Davis",
      department: "HR",
      email: "emily@company.com",
    },
    { id: 2, name: "Raj Patel", department: "HR", email: "raj@company.com" },
  ]);

  const [employees] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      email: "john@company.com",
    },
    {
      id: 2,
      name: "Priya Sharma",
      department: "Design",
      email: "priya@company.com",
    },
  ]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Manage HRs & Employees
      </h2>

      {/* HR Table */}
      <h3 className="font-semibold text-gray-700 mb-2">HR Team</h3>
      <table className="w-full text-sm border-collapse mb-6">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Department</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {hrs.map((hr) => (
            <tr key={hr.id} className="border-t">
              <td className="p-2">{hr.name}</td>
              <td className="p-2">{hr.department}</td>
              <td className="p-2">{hr.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Employee Table */}
      <h3 className="font-semibold text-gray-700 mb-2">Employees</h3>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Department</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.department}</td>
              <td className="p-2">{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
