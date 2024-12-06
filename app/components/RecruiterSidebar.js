import Link from "next/link";
import { FaHome, FaBriefcase, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function RecruiterSidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-semibold mb-6">Recruiter Panel</h2>
      <ul>
        <li className="mb-4">
          <Link href="/recruiter/dashboard" className="flex items-center gap-3 text-lg">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/recruiter/job-postings" className="flex items-center gap-3 text-lg">
            <FaBriefcase /> Job Postings
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/recruiter/applications" className="flex items-center gap-3 text-lg">
            <FaUser /> Applicants
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/recruiter/profile" className="flex items-center gap-3 text-lg">
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
