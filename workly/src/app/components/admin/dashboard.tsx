"use client";

import Header from "../header/header";
import AdminAnnouncements from "./adminAnnouncements";
import AdminStats from "./adminStats";
import AnalyticsSection from "./analyticsSection";
import ManageUsers from "./managerUsers";

export default function AdminDashboard() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mb-10">
          Welcome back, Admin. Here you can manage HRs, employees, and track
          company performance.
        </p>

        {/* Stats Overview */}
        <AdminStats />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Manage HRs & Employees */}
          <div className="md:col-span-2">
            <ManageUsers />
          </div>

          {/* Announcements */}
          <AdminAnnouncements />
        </div>

        {/* Analytics */}
        <div className="mt-10">
          <AnalyticsSection />
        </div>
      </div>
    </>
  );
}
