import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function StudentList({ students, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Department</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">{student.department}</td>
              <td className="py-2 px-4 flex gap-4">
                <Link href={`/admin/students/edit/${student.id}`} className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </Link>
                <button
                  onClick={() => onDelete(student.id)}
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
