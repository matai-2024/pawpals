// ScheduleCard component

interface ScheduleCardProps {
  title: string
  time: string
  going: boolean
  image: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  time,
  going,
  image,
}) => (
  <div className="flex items-center border p-4 rounded-lg space-x-4">
    <img src={image} alt={title} className="w-16 h-16 bg-gray-200 rounded-lg" />{' '}
    <div className="flex-1">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <button className="text-sm text-blue-500 mt-2">View details</button>
    </div>
    <p className="text-sm text-gray-500">{going ? '✓ Going' : '✗ Not going'}</p>
  </div>
)

export default ScheduleCard
