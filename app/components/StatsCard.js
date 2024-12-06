export default function StatsCard({ title, value, icon }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className="text-4xl text-blue-600">{icon}</div>
      </div>
    );
  }
  