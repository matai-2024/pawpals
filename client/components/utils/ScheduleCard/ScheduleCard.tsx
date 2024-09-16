// ScheduleCard component

interface ScheduleCardProps {
  title: string
  date: string
  time: string
  going: boolean
  image: string
  buttonTitle?: string[]
  buttonIcon?: string[]
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  date,
  time,
  going,
  image,
  buttonTitle,
  buttonIcon,
}) => (
  <div className="flex items-center border p-3 rounded-lg gap-6">
    <div className="w-36 h-24 rounded-md overflow-hidden">
      <img src={image} alt={title} className="object-cover" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">
          {date}, {time}
        </p>
        <p className="font-semibold">{title}</p>
      </div>
      <div className="flex space-x-6 mt-2">
        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
          <i className={`fa-solid fa-${buttonIcon[0]}`}></i>
          <span>{buttonTitle[0]}</span>
        </button>
        <button className="text-sm text-gray-500 hover:text-red-700 flex items-center space-x-2">
          <i className="fa-solid fa-x"></i>
          <span>Cancel attendance</span>
        </button>
      </div>
    </div>
    <p className="text-sm text-gray-500">{going ? '✓ Going' : '✗ Not going'}</p>
  </div>
)

export default ScheduleCard
