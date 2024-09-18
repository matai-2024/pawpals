// ScheduleCard component
import { Link } from 'react-router-dom'
import dateToReadable, { TimeFormat } from '../Presentation'

interface ScheduleCardProps {
  id: number
  title: string
  date: string
  time: string
  eventImage: string
  viewBtn?: CardButtons
  cancelBtn?: CardButtons
  editBtn?: CardButtons
}

interface CardButtons {
  title: string
  icon: string
}

export default function ScheduleCard({
  id,
  title,
  date,
  time,
  eventImage,
  viewBtn,
  editBtn,
  cancelBtn,
}: ScheduleCardProps) {
  const fallbackimage = '/events/event-9.webp'
  // console.log(eventImage)

  return (
    <div className="flex items-center border w-full p-3 rounded-lg gap-6 shadow-md ease-in-out duration-200">
      <div className="w-36 h-24 rounded-md overflow-hidden">
        <img
          src={`/events/${eventImage}` || fallbackimage}
          alt={title}
          className="object-cover"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = fallbackimage
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-left">
          <p className="text-sm text-gray-500">
            {`${dateToReadable(date)}, `}
            {TimeFormat(time)}
          </p>
          <p className="font-semibold">{title}</p>
        </div>
        <div className="flex space-x-6 mt-2">
          <Link to={`/events/${id}`} onClick={() => window.scroll(0, 0)}>
            <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
              <i className={`fa-solid fa-${viewBtn?.icon}`}></i>
              <span>{viewBtn?.title}</span>
            </button>
          </Link>
          {editBtn && (
            <Link to={`/events/${id}/edit`} onClick={() => window.scroll(0, 0)}>
              <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
                <i className={`fa-solid fa-${editBtn?.icon}`}></i>
                <span>{editBtn?.title}</span>
              </button>
            </Link>
          )}
          {cancelBtn && (
            <button className="text-sm text-gray-500 hover:text-red-700 flex items-center space-x-2">
              <i className={`fa-solid fa-${cancelBtn?.icon}`}></i>
              <span>{cancelBtn?.title}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
