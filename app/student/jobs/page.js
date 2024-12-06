"use client"

import { useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import StudentSidebar from "@/app/components/StudentSidebar";

// Dummy Data for Available Jobs (this can be replaced with API data fetching)
const jobs = [
  { id: 1, company: "ABC Corp", jobTitle: "Software Engineer", location: "Remote", jobType: "Full-time" },
  { id: 2, company: "XYZ Ltd", jobTitle: "Data Scientist", location: "New York", jobType: "Full-time" },
  { id: 3, company: "Tech Solutions", jobTitle: "Frontend Developer", location: "San Francisco", jobType: "Internship" },
  { id: 4, company: "Innovate Tech", jobTitle: "Backend Developer", location: "Remote", jobType: "Full-time" },
  { id: 5, company: "Global Co.", jobTitle: "Product Manager", location: "London", jobType: "Part-time" },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <StudentSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Available Jobs</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center border p-3 rounded-lg bg-white">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              className="w-full ml-3 p-2 border-none outline-none"
              placeholder="Search by company, job title, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{job.jobTitle}</h3>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <div className="flex items-center text-gray-500 mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <span>{job.location}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{job.jobType}</p>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
