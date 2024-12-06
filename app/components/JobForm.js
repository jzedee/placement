"use client"; // Only on the client side

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function JobForm({ jobData = null }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: jobData?.title || "",
      company: jobData?.company || "",
      location: jobData?.location || "",
    },
  });
  const router = useRouter();

  // Submit function
  const onSubmit = (data) => {
    console.log(data);

    if (jobData) {
      // Update Job
      console.log("Updating Job:", data);
    } else {
      // Create New Job
      console.log("Adding New Job:", data);
    }

    // Redirect to Job Listings after submit
    router.push("/admin/job");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {jobData ? "Edit Job" : "Add New Job"}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Job title is required" })}
            className="w-full mt-2 p-3 border rounded-lg"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-600">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register("company", { required: "Company name is required" })}
            className="w-full mt-2 p-3 border rounded-lg"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register("location", { required: "Location is required" })}
            className="w-full mt-2 p-3 border rounded-lg"
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">
          {jobData ? "Update Job" : "Add Job"}
        </button>
      </form>
    </div>
  );
}
