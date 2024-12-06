"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // Use Next.js Link component for routing
import { FaHome, FaUserAlt, FaBriefcase, FaCog, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter for redirection

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [role, setRole] = useState(null); // State to store user role
  const [username, setUsername] = useState(null); // State to store username
  const router = useRouter();

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Check if the user is authenticated (from session/localStorage or API)
    const user = JSON.parse(localStorage.getItem("user")); // Assuming user data is stored in localStorage
    if (user) {
      setIsLoggedIn(true);
      setRole(user.role); // Set role from the user object
      setUsername(user.name); // Set the username from the user object
    } else {
      setIsLoggedIn(false);
      setRole(null);
      setUsername(null);
    }
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleLogout = () => {
    // Clear user data
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setRole(null);
    setUsername(null);
    router.push("/auth/login"); // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-semibold">
          <Link href="/">Placement Management</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
          {isLoggedIn && (
            <>
              <Link href="/jobs" className="flex items-center space-x-2">
                <FaBriefcase />
                <span>Jobs</span>
              </Link>
              <Link href={`/${role}/dashboard`} className="flex items-center space-x-2">
                <FaUserAlt />
                <span>{username ? `Dashboard (${username})` : "Dashboard"}</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-2">
                <FaCog />
                <span>Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link href="/auth/login" className="flex items-center space-x-2">
                <FaSignInAlt />
                <span>Login</span>
              </Link>
              <Link href="/auth/signup" className="flex items-center space-x-2">
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-blue-600`}>
        <div className="space-y-4 text-white py-4 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </Link>
          {isLoggedIn && (
            <>
              <Link href="/jobs" className="flex items-center space-x-2">
                <FaBriefcase />
                <span>Jobs</span>
              </Link>
              <Link href={`/${role}/dashboard`} className="flex items-center space-x-2">
                <FaUserAlt />
                <span>{username ? `Dashboard (${username})` : "Dashboard"}</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-2">
                <FaCog />
                <span>Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link href="/auth/login" className="flex items-center space-x-2">
                <FaSignInAlt />
                <span>Login</span>
              </Link>
              <Link href="/auth/signup" className="flex items-center space-x-2">
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
