"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import StudentSidebar from "@/app/components/StudentSidebar";

// Dummy Data for Student Profile (this can be replaced with API data fetching)
const studentProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  education: "B.Tech in Computer Science",
  resume: "john_doe_resume.pdf", // Link to resume (can be replaced with actual file)
};

export default function ProfilePage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profile, setProfile] = useState(studentProfile);

  const onSubmit = (data) => {
    // Simulate a profile update (replace with actual API call)
    setProfile((prev) => ({
      ...prev,
      ...data,
    }));
    alert("Profile updated successfully!");
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Resume file selected: ${file.name}`);
      // Handle the resume file upload here (e.g., upload to a server)
    }
  };

  return (
    <div className="flex min-h-screen">
      <StudentSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

        {/* Profile Overview */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Profile Overview</h3>
          <p className="text-gray-600">Name: {profile.name}</p>
          <p className="text-gray-600">Email: {profile.email}</p>
          <p className="text-gray-600">Phone: {profile.phone}</p>
          <p className="text-gray-600">Education: {profile.education}</p>
          <p className="text-gray-600">
            Resume: <a href="#" className="text-blue-500">{profile.resume}</a>
          </p>
        </div>

        {/* Edit Profile Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                id="name"
                type="text"
                className="w-full p-3 border rounded-lg"
                defaultValue={profile.name}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 border rounded-lg"
                defaultValue={profile.email}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
              <input
                id="phone"
                type="text"
                className="w-full p-3 border rounded-lg"
                defaultValue={profile.phone}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="education" className="block text-sm font-semibold mb-2">Education</label>
              <input
                id="education"
                type="text"
                className="w-full p-3 border rounded-lg"
                defaultValue={profile.education}
                {...register("education", { required: "Education is required" })}
              />
              {errors.education && <p className="text-red-500 text-sm">{errors.education.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="resume" className="block text-sm font-semibold mb-2">Resume</label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full p-3 border rounded-lg"
                onChange={handleResumeChange}
              />
              <p className="text-gray-600 mt-2">Current resume: {profile.resume}</p>
            </div>

            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Update Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
