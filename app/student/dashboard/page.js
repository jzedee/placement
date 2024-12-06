"use client"

import { useState } from "react";
import { FaUserCircle, FaClipboardCheck, FaBell, FaCalendarAlt } from "react-icons/fa";
import StudentSidebar from "@/app/components/StudentSidebar";

// Dummy data for student and applications (you can replace this with actual data fetching from a database)
const studentData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  currentStatus: "Looking for opportunities",
};

const appliedCompanies = [
  { id: 1, company: "ABC Corp", job: "Software Engineer", status: "Pending" },
  { id: 2, company: "XYZ Ltd", job: "Data Scientist", status: "Accepted" },
  { id: 3, company: "Tech Solutions", job: "Frontend Developer", status: "Rejected" },
];

const upcomingPlacements = [
  { id: 1, event: "Mock Interviews", date: "2024-12-15" },
  { id: 2, event: "Tech Talk by Google", date: "2024-12-20" },
];

const notifications = [
  "New job openings are available for software engineers.",
  "The last date to apply for the XYZ Ltd position is tomorrow.",
  "Your application to Tech Solutions has been reviewed. Please check the status.",
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Welcome, {studentData.name}</h1>

        {/* Student Profile */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Profile</h3>
          <div className="flex items-center gap-4">
            <FaUserCircle size={40} />
            <div>
              <h4 className="text-lg font-semibold">{studentData.name}</h4>
              <p className="text-gray-600">{studentData.email}</p>
              <p className="text-gray-600">{studentData.currentStatus}</p>
            </div>
          </div>
        </div>

        {/* Applied Companies */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Applied Companies</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Job</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {appliedCompanies.map((application) => (
                <tr key={application.id} className="border-b">
                  <td className="p-3">{application.company}</td>
                  <td className="p-3">{application.job}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        application.status === "Accepted"
                          ? "bg-green-500"
                          : application.status === "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Placements */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Upcoming Placements</h3>
          <ul>
            {upcomingPlacements.map((event) => (
              <li key={event.id} className="flex items-center gap-2 mb-4">
                <FaCalendarAlt />
                <span className="font-semibold">{event.event}</span>
                <span className="text-gray-600">{event.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-center gap-2 mb-4">
                <FaBell />
                <p className="text-gray-600">{notification}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
