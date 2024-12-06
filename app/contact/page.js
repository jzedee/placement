import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "@/app/components/ContactInfo";

export default function Contact() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <header className="bg-white w-full py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-600">Contact Us</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 mt-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to answer any questions you may have about the Placement Management System.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </section>

      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Placement Management System. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
