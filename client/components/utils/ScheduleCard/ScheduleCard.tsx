// ScheduleCard component
const ScheduleCard = ({ title, time, going, image }) => (
  <div className="flex items-center border p-4 rounded-lg space-x-4">
    {/* Image Section */}
    <img
      src={image}
      alt={title}
      className="w-16 h-16 object-cover rounded-lg"
    />

    {/* Event Details */}
    <div className="flex-1">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <button className="text-sm text-blue-500 mt-2">View details</button>
    </div>

    {/* Going Status */}
    <p className="text-sm text-gray-500">{going ? '✓ Going' : '✓ Not going'}</p>
  </div>
)

export default ScheduleCard
