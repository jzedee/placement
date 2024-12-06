"use client"; // This component will be client-side only
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="bg-gray-800 text-white h-full w-64 p-6">
      <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-6">
          <li>
            <Link href="/admin/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/jobs" className="hover:text-blue-400">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/admin/recruiters" className="hover:text-blue-400">
              Recruiters
            </Link>
          </li>
          <li>
            <Link href="/admin/students" className="hover:text-blue-400">
              Students
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
