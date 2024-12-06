"use client";

import { useState } from "react";
import axios from "axios"; // Axios for API calls
import AuthForm from "@/app/components/AuthForm";
import { useRouter } from "next/navigation"; // Import useRouter for programmatic navigation

export default function LoginPage() {
  const [error, setError] = useState(null);
  const router = useRouter(); // useRouter hook for redirection

  const handleLogin = async (data) => {
    try {
      // Send login data to the API
      const response = await axios.post("/api/auth/login", data);

      // On successful login, redirect based on user role
      console.log("Login successful:", response.data);
      const { role } = response.data.session; // Assuming the role is sent in the session

      // Redirect based on the user's role
      if (role === "student") {
        router.push("/student/dashboard");
      } else if (role === "recruiter") {
        router.push("/recruiter/dashboard");
      } else if (role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/"); // Default fallback, e.g., home page if no role matches
      }
    } catch (err) {
      console.error("Login failed:", err.response ? err.response.data : err.message);
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto">
        {error && (
          <div className="bg-red-100 text-red-800 p-4 mb-4 rounded-md">
            {error}
          </div>
        )}
        <AuthForm type="login" onSubmit={handleLogin} />
      </div>
    </main>
  );
}
