export default function About() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <header className="bg-white w-full py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 mt-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Placement Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform bridges the gap between students, recruiters, and placement cells, making the placement process efficient, transparent, and accessible.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Placement Management System, our mission is to streamline and simplify the placement process for all stakeholders. By providing a centralized platform, we aim to enhance communication, reduce manual efforts, and foster success for students, recruiters, and administrators alike.
        </p>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Alice Johnson</h4>
            <p className="text-gray-600">Lead Designer</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Placement Management System. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
