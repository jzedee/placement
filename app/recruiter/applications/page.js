"use client"

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import RecruiterSidebar from "@/app/components/RecruiterSidebar";

// Dummy data for applications (you can replace this with actual data fetching from a database)
const applications = [
  { id: 1, applicant: "Alice Johnson", job: "Software Engineer", status: "Pending" },
  { id: 2, applicant: "Bob Smith", job: "Marketing Specialist", status: "Accepted" },
  { id: 3, applicant: "Charlie Brown", job: "Data Scientist", status: "Rejected" },
];

export default function ApplicationsPage() {
  const [applicants, setApplicants] = useState(applications);
  const { register, handleSubmit } = useForm();

  const handleStatusUpdate = (id, status) => {
    setApplicants(applicants.map((app) => 
      app.id === id ? { ...app, status } : app
    ));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen">
      <RecruiterSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Applications</h1>

        {/* Search/Filter (Optional) */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search applicants..."
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Application List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Applicants</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-3 text-left">Applicant</th>
                <th className="p-3 text-left">Job</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((application) => (
                <tr key={application.id} className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <FaUserCircle />
                      <span>{application.applicant}</span>
                    </div>
                  </td>
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
                  <td className="p-3 flex gap-4">
                    {/* Action Buttons */}
                    <button
                      onClick={() => handleStatusUpdate(application.id, "Accepted")}
                      className="text-green-500 hover:text-green-700"
                    >
                      <FaCheckCircle />
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(application.id, "Rejected")}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimesCircle />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
