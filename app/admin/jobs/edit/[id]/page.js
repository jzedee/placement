import JobForm from "@/app/components/JobForm";

// Dummy job data for example, in a real app, this would be fetched by ID
const jobData = { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York" };

export default function EditJobPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Edit Job</h1>
        <JobForm jobData={jobData} />
      </div>
    </div>
  );
}
