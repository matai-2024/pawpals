import dateToReadable, { TimeFormat } from '../components/utils/Presentation'
import { Event } from '../../models/events'

interface Props {
  search: Event[] | undefined
}

export default function EventList({ search }: Props) {
  return (
    <ul>
      {search?.map((event) => (
        <div key={event.id}>
          <div>
            <div
              data-testid="event-card"
              className="inline-flex justify-start items-start gap-6 my-3 w-[880px] text-left bg-opacity-20 ease-in-out duration-200 hover:bg-opacity-50 hover:bg-gray-100h-52 p-6 bg-white rounded-lg border border-[#d9d9d9]"
            >
              <img
                className="w-40 h-40 object-cover"
                src={event.eventImage}
                alt={event.title}
              />
              <div className="grow  shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex  ">
                  <p className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                    {`${dateToReadable(event.date)},`} {TimeFormat(event.time)}
                  </p>
                  <h1 className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    {event.title}
                  </h1>
                  <p className="self-stretch text-[#1e1e1e] text-xl font-semibold font-['Inter'] leading-[28.80px]">
                    {event.location}
                  </p>
                  <p className="text-[#757575] text-sm font-normal font-['Inter'] leading-tight ">
                    <p className="line-clamp-2">{event.description}</p>
                  </p>
                  <p className="opacity-60 self-stretch text-[#757575] text-sm font-normal font-['Inter'] leading-tight">
                    x attending
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  )
}
