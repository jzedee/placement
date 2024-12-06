import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function RecruiterList({ recruiters, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Company</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map((recruiter) => (
            <tr key={recruiter.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{recruiter.name}</td>
              <td className="py-2 px-4">{recruiter.email}</td>
              <td className="py-2 px-4">{recruiter.company}</td>
              <td className="py-2 px-4 flex gap-4">
                <Link href={`/admin/recruiters/edit/${recruiter.id}`} className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </Link>
                <button
                  onClick={() => onDelete(recruiter.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
