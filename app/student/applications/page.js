import { FaBriefcase, FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import StudentSidebar from "@/app/components/StudentSidebar";

// Dummy Data for Student Applications (this can be replaced with API data fetching)
const applications = [
  {
    id: 1,
    company: "ABC Corp",
    jobTitle: "Software Engineer",
    status: "Pending",
    appliedOn: "2024-11-01",
    location: "Remote",
  },
  {
    id: 2,
    company: "XYZ Ltd",
    jobTitle: "Data Scientist",
    status: "Accepted",
    appliedOn: "2024-10-15",
    location: "New York",
  },
  {
    id: 3,
    company: "Tech Solutions",
    jobTitle: "Frontend Developer",
    status: "Rejected",
    appliedOn: "2024-09-25",
    location: "San Francisco",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">My Applications</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Applications Overview</h3>

          {/* Application Table */}
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Job Title</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Applied On</th>
                <th className="p-3 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id} className="border-b">
                  <td className="p-3">{application.company}</td>
                  <td className="p-3">{application.jobTitle}</td>
                  <td className="p-3">
                    {/* Status indicators */}
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
                  <td className="p-3">{application.appliedOn}</td>
                  <td className="p-3">{application.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
