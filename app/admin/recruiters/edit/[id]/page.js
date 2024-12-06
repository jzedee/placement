import RecruiterForm from "@/app/admin/recruiters/add/page";

// Dummy recruiter data for example, in a real app, this would be fetched by ID
const recruiterData = { id: 1, name: "John Doe", email: "johndoe@example.com", company: "TechCorp" };

export default function EditRecruiterPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Edit Recruiter</h1>
        <RecruiterForm recruiterData={recruiterData} />
      </div>
    </div>
  );
}
