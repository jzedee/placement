import AdminSidebar from "@/app/components/AdminSidebar";
import StatsCard from "@/app/components/StatsCard";
import RecentActivities from "@/app/components/RecentActivities";
import { FaUsers, FaClipboardList, FaCog } from "react-icons/fa"; // Example icons for the stats

// Dummy Data for Example
const activities = [
  {
    description: "New user registered",
    time: "2 hours ago",
    status: "Completed",
  },
  {
    description: "Placement for XYZ company",
    time: "1 day ago",
    status: "Pending",
  },
  {
    description: "User account updated",
    time: "3 days ago",
    status: "Completed",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <AdminSidebar /> */}

      <main className="flex-1 p-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Welcome to Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value="1,234"
            icon={<FaUsers className="text-4xl text-blue-500" />}
          />
          <StatsCard
            title="Active Placements"
            value="120"
            icon={<FaClipboardList className="text-4xl text-green-500" />}
          />
          <StatsCard
            title="Settings"
            value="Configured"
            icon={<FaCog className="text-4xl text-yellow-500" />}
          />
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <RecentActivities activities={activities} />
          </div>

          {/* Announcements */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Announcements</h3>
            <p className="text-gray-600">
              New updates and features will be available soon. Stay tuned!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
