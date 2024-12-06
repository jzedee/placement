import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-800">
      <header className="bg-white w-full py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-600">Placement Management System</h1>
          <nav className="space-x-4">
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <section className="container mx-auto flex flex-col items-center text-center px-4 mt-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Streamline Your Placement Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Our platform connects students, recruiters, and placement cells, making the placement process efficient and seamless.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/student/dashboard"
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          >
            Student Dashboard
          </Link>
          <Link
            href="/recruiter/dashboard"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
          >
            Recruiter Dashboard
          </Link>
          <Link
            href="/admin/dashboard"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Admin Dashboard
          </Link>
        </div>
      </section>

      <section className="container mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">For Students</h3>
            <p className="text-gray-600 mb-4">
              Explore job opportunities, track applications, and manage your profile.
            </p>
            <Link href="/student/dashboard" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">For Recruiters</h3>
            <p className="text-gray-600 mb-4">
              Post jobs, view applications, and schedule interviews seamlessly.
            </p>
            <Link href="/recruiter/dashboard" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">For Admins</h3>
            <p className="text-gray-600 mb-4">
              Manage users, monitor applications, and generate reports efficiently.
            </p>
            <Link href="/admin/dashboard" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Placement Management System. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
