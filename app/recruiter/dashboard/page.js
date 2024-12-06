import StatsCard from "@/app/components/StatsCard";
import RecentActivities from "@/app/components/RecentActivities";
import { FaBriefcase, FaUsers, FaClipboardList } from "react-icons/fa"; // Icons for the stats
import RecruiterSidebar from "@/app/components/RecruiterSidebar";

// Dummy Data for Example
const activities = [
  { description: "New applicant for Software Engineer position", time: "2 hours ago", status: "Reviewed" },
  { description: "New job posting for Marketing position", time: "1 day ago", status: "Published" },
  { description: "Application for Data Scientist position updated", time: "3 days ago", status: "Pending" },
];

export default function RecruiterDashboardPage() {
  return (
    <div className="flex min-h-screen">
      <RecruiterSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Welcome to Recruiter Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          <StatsCard
            title="Job Postings"
            value="8"
            icon={<FaBriefcase />}
          />
          <StatsCard
            title="Active Applicants"
            value="15"
            icon={<FaUsers />}
          />
          <StatsCard
            title="Active Placements"
            value="5"
            icon={<FaClipboardList />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivities activities={activities} />
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Job Postings</h3>
            <ul>
              <li>Software Engineer - XYZ Company</li>
              <li>Marketing Specialist - ABC Inc.</li>
              <li>Data Scientist - Tech Corp</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
