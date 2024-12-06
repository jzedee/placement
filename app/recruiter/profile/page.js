"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import RecruiterSidebar from "@/app/components/RecruiterSidebar";

// Dummy data for the recruiter (you can replace this with actual data from a database or API)
const recruiterData = {
  name: "John Doe",
  email: "john.doe@example.com",
  company: "Tech Solutions",
  jobTitle: "Recruiter",
  description: "I manage recruitment for various tech roles.",
};

export default function ProfilePage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: recruiterData,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form submission to save updated profile
  const onSubmit = (data) => {
    console.log("Updated Profile Data:", data);
    setIsSuccess(true);
  };

  return (
    <div className="flex min-h-screen">
      <RecruiterSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Edit Profile</h1>

        {isSuccess && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4">
            Profile updated successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              {...register("email", { required: "Email is required" })}
              type="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-600">Company</label>
            <input
              id="company"
              {...register("company", { required: "Company name is required" })}
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-600">Job Title</label>
            <input
              id="jobTitle"
              {...register("jobTitle", { required: "Job title is required" })}
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              id="description"
              {...register("description", { required: "Description is required" })}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md w-full"
          >
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}
