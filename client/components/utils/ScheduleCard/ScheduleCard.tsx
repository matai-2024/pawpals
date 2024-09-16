// ScheduleCard component

import { Link } from 'react-router-dom'

interface ScheduleCardProps {
  id: number
  title: string
  date: string
  time: string
  going: boolean
  image: string
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
  going,
  image,
  viewBtn,
  editBtn,
  cancelBtn,
}: ScheduleCardProps) {
  console.log(viewBtn)

  return (
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
          <Link to={`/events/${id}`}>
            <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
              <i className={`fa-solid fa-${viewBtn?.icon}`}></i>
              <span>{viewBtn?.title}</span>
            </button>
          </Link>
          {editBtn && (
            <Link to={`/events/${id}/edit`}>
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
      <p className="text-sm text-gray-500">
        {going ? '✓ Going' : '✗ Not going'}
      </p>
    </div>
  )
}
