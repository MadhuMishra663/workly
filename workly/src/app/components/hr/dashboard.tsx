"use client";

import { useState } from "react";
import SummaryCards from "./summaryCard";
import LeaveRequests from "./leaveRequest";
import UpcomingHolidays from "./holidays";
import Announcements from "./announcements";
import QuickActions from "./quickActions";
import Header from "../header/header";

export default function HrDashboard() {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: "John Doe", type: "Sick Leave", days: 2, status: "Pending" },
    {
      id: 2,
      name: "Priya Sharma",
      type: "Casual Leave",
      days: 1,
      status: "Pending",
    },
  ]);

  const [announcements] = useState([
    {
      id: 1,
      title: "Office Renovation",
      date: "2025-11-20",
      message: "The HR floor will be under renovation next week.",
    },
    {
      id: 2,
      title: "Annual Party",
      date: "2025-12-05",
      message: "Get ready for the annual company party!",
    },
  ]);

  const holidays = [
    { date: "2025-12-25", name: "Christmas Day" },
    { date: "2026-01-01", name: "New Year’s Day" },
  ];

  const handleLeaveAction = (id: number, action: "Approve" | "Reject") => {
    setLeaveRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: action === "Approve" ? "Approved" : "Rejected" }
          : req
      )
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">HR Dashboard</h1>

        <SummaryCards announcements={announcements} />

        <div className="grid md:grid-cols-3 gap-6">
          <LeaveRequests
            leaveRequests={leaveRequests}
            handleLeaveAction={handleLeaveAction}
          />
          <UpcomingHolidays holidays={holidays} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Announcements announcements={announcements} />
          <QuickActions />
        </div>
      </div>
    </>
  );
}
