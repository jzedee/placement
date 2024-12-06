"use client"

import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import RecruiterSidebar from "@/app/components/RecruiterSidebar";

// Dummy Job Posting Data
const jobPostings = [
  { id: 1, title: "Software Engineer", company: "XYZ Corp", status: "Active" },
  { id: 2, title: "Marketing Specialist", company: "ABC Inc.", status: "Inactive" },
  { id: 3, title: "Data Scientist", company: "Tech Corp", status: "Active" },
];

export default function JobPostingsPage() {
  const [postings, setPostings] = useState(jobPostings);

  const handleDelete = (id) => {
    setPostings(postings.filter((posting) => posting.id !== id));
  };

  return (
    <div className="flex min-h-screen">
      <RecruiterSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Job Postings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {postings.map((posting) => (
            <div key={posting.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{posting.title}</h3>
              <p className="text-gray-700">Company: {posting.company}</p>
              <p className="text-gray-500">Status: {posting.status}</p>
              <div className="flex gap-4 mt-4">
                <Link href={`/recruiter/job-postings/edit/${posting.id}`} className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </Link>
                <button onClick={() => handleDelete(posting.id)} className="text-red-600 hover:text-red-800">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
