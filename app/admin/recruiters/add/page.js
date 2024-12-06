"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RecruiterForm({ recruiterData = null }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: recruiterData?.name || "",
      email: recruiterData?.email || "",
      company: recruiterData?.company || "",
    },
  });

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);

    if (recruiterData) {
      // Update Recruiter
      console.log("Updating Recruiter:", data);
    } else {
      // Add New Recruiter
      console.log("Adding New Recruiter:", data);
    }

    // Redirect to Recruiter Listings after submit
    router.push("/admin/recruiters");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {recruiterData ? "Edit Recruiter" : "Add New Recruiter"}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Recruiter name is required" })}
            className="w-full mt-2 p-3 border rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full mt-2 p-3 border rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-600">Company</label>
          <input
            type="text"
            id="company"
            {...register("company", { required: "Company name is required" })}
            className="w-full mt-2 p-3 border rounded-lg"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
        </div>

        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">
          {recruiterData ? "Update Recruiter" : "Add Recruiter"}
        </button>
      </form>
    </div>
  );
}
