import JobForm from "@/app/components/JobForm";

export default function AddJobPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Add New Job</h1>
        <JobForm />
      </div>
    </div>
  );
}
