export default function RecentActivities({ activities }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
              <div className="text-sm text-blue-600">{activity.status}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  