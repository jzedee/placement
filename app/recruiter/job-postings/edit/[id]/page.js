"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import RecruiterSidebar from "@/app/components/RecruiterSidebar";

// Dummy Data for Example
const jobPost = { id: 1, title: "Software Engineer", company: "XYZ Corp", description: "Develop software", status: "Active" };

export default function EditJobPostingPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: jobPost,
  });

  const router = useRouter();

  const onSubmit = (data) => {
    console.log("Updated Job Posting:", data);
    router.push("/recruiter/job-postings");
  };

  return (
    <div className="flex min-h-screen">
      <RecruiterSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Edit Job Posting</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">Job Title</label>
            <input
              id="title"
              {...register("title")}
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-600">Company</label>
            <input
              id="company"
              {...register("company")}
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              id="description"
              {...register("description")}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-600">Status</label>
            <select
              id="status"
              {...register("status")}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">
            Update Job Posting
          </button>
        </form>
      </main>
    </div>
  );
}
