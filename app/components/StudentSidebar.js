import Link from "next/link";
import { FaHome, FaBriefcase, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function StudentSidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-semibold mb-6">Student Panel</h2>
      <ul>
        <li className="mb-4">
          <Link href="/student/dashboard" className="flex items-center gap-3 text-lg">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/student/applications" className="flex items-center gap-3 text-lg">
            <FaBriefcase /> Applications
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/student/jobs" className="flex items-center gap-3 text-lg">
            <FaBriefcase /> Jobs
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/student/profile" className="flex items-center gap-3 text-lg">
            <FaUser /> Profile
          </Link>
        </li>
        <li>
          <button className="flex items-center gap-3 text-lg">
            <FaSignOutAlt /> Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}
