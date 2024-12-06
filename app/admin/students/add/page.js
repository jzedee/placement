import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function StudentForm({ studentData = null }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: studentData?.name || "",
            email: studentData?.email || "",
            department: studentData?.department || "",
        },
    });

    const router = useRouter();

    const onSubmit = (data) => {
        console.log(data);

        if (studentData) {
            // Update Student
            console.log("Updating Student:", data);
        } else {
            // Add New Student
            console.log("Adding New Student:", data);
        }

        // Redirect to Student Listings after submit
        router.push("/admin/students");
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {studentData ? "Edit Student" : "Add New Student"}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Student name is required" })}
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
                    <label htmlFor="department" className="block text-sm font-medium text-gray-600">Department</label>
                    <input
                        type="text"
                        id="department"
                        {...register("department", { required: "Department name is required" })}
                        className="w-full mt-2 p-3 border rounded-lg"
                    />
                    {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
                </div>

                <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">

                    {studentData ? "Update Student" : "Add Student"} </button> </form> </div>);
}