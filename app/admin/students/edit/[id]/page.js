import StudentForm from "@/app/admin/students/add/page";

// Dummy student data for example, in a real app, this would be fetched by ID
const studentData = { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", department: "Computer Science" };

export default function EditStudentPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Edit Student</h1>
        <StudentForm studentData={studentData} />
      </div>
    </div>
  );
}