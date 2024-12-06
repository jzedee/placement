"use client";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import axios from "axios"; // Import Axios
import AuthForm from "@/app/components/AuthForm";

export default function SignupPage() {
  const router = useRouter(); // Initialize the router for redirection

  const handleSignup = async (data) => {
    try {
      // Make an API call to register the user
      const response = await axios.post("/api/auth/signup", data);

      console.log("Signup successful:", response.data);
      // Show a success alert
      alert("Signup successful! You can now login.");

      // Redirect to login page
      router.push("/auth/login");
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
      // Handle error (e.g., show an error message)
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </main>
  );
}
