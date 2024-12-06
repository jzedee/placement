import Link from "next/link";

export default function JobList({ jobs, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Listings</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">Job Title</th>
            <th className="px-4 py-2 text-left text-gray-600">Company</th>
            <th className="px-4 py-2 text-left text-gray-600">Location</th>
            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{job.title}</td>
              <td className="px-4 py-2">{job.company}</td>
              <td className="px-4 py-2">{job.location}</td>
              <td className="px-4 py-2 flex space-x-4">
                <Link href={`/admin/jobs/edit/${job.id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(job.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
