"use client"

import StudentList from "@/app/components/StudentList";
import { useState } from "react";

// Dummy Student Data for Example
const students = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", department: "Computer Science" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", department: "Mechanical Engineering" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", department: "Electrical Engineering" },
];

export default function StudentsPage() {
  const [studentsList, setStudentsList] = useState(students);

  const handleDelete = (studentId) => {
    setStudentsList(studentsList.filter((student) => student.id !== studentId));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Student Listings</h1>
        <StudentList students={studentsList} onDelete={handleDelete} />
        <div className="mt-6">
          <a
            href="/admin/students/add"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500"
          >
            Add New Student
          </a>
        </div>
      </div>
    </div>
  );
}
