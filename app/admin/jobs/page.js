"use client"
import JobList from "@/app/components/JobList";
import { useState } from "react";

// Dummy Job Data for Example
const jobData = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York" },
  { id: 2, title: "Data Analyst", company: "DataInc", location: "San Francisco" },
  { id: 3, title: "Product Manager", company: "InnovateX", location: "Los Angeles" },
];

export default function JobPage() {
  const [jobs, setJobs] = useState(jobData);

  const handleDelete = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Job Listings</h1>
        <JobList jobs={jobs} onDelete={handleDelete} />
        <div className="mt-6">
          <a
            href="/admin/job/add"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500"
          >
            Add New Job
          </a>
        </div>
      </div>
    </div>
  );
}
