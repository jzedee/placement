"use client"

import RecruiterList from "@/app/components/RecruiterList";
import { useState } from "react";

// Dummy Recruiter Data for Example
const recruiters = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", company: "TechCorp" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", company: "DataInc" },
  { id: 3, name: "Mike Johnson", email: "mikej@example.com", company: "InnovateX" },
];

export default function RecruitersPage() {
  const [recruitersList, setRecruitersList] = useState(recruiters);

  const handleDelete = (recruiterId) => {
    setRecruitersList(recruitersList.filter((recruiter) => recruiter.id !== recruiterId));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Recruiter Listings</h1>
        <RecruiterList recruiters={recruitersList} onDelete={handleDelete} />
        <div className="mt-6">
          <a
            href="/admin/recruiters/add"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500"
          >
            Add New Recruiter
          </a>
        </div>
      </div>
    </div>
  );
}
