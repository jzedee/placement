export default function ContactInfo() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
        <p className="text-gray-600 mb-4">
          Feel free to reach out to us through the following contact details:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@placement-system.com" className="text-blue-600 hover:underline">
              support@placement-system.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 234 567 890
            </a>
          </li>
          <li>
            <strong>Address:</strong> 123 Placement Avenue, Tech City, TX 75001
          </li>
        </ul>
      </div>
    );
  }
  