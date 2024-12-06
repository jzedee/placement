"use client";
import axios from "axios"; // Import Axios
import AuthForm from "@/app/components/AuthForm";

export default function SignupPage() {
  const handleSignup = async (data) => {
    try {
      // Make an API call to register the user
      const response = await axios.post("/api/auth/signup", data);

      console.log("Signup successful:", response.data);
      // You can redirect the user or show a success message here
      // For example: router.push('/login') or router.push('/dashboard')
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </main>
  );
}
