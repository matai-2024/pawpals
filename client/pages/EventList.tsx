import dateToReadable, {
  DescriptionFormat,
  LocationFormat,
  TimeFormat,
} from '../components/utils/Presentation'
import { Link } from 'react-router-dom'
import { Event } from '../../models/events'
import useAttendees from '../hooks/use-attendees'
import useFetchEvents from '../hooks/use-fetch-events'

interface Props {
  search: Event[] | undefined
}

export default function EventList({ search }: Props) {
  const { data: events } = useFetchEvents()

  const defaultImg =
    'https://www.reginapolice.ca/wp-content/uploads/placeholder-9.png'

  const { data: attendees } = useAttendees()

  function countAttendees(num: number) {
    const eventsArr = attendees.map((guest: { eventId: number }) => {
      return guest.eventId
    })
    const numOfEvents = eventsArr.filter((event: number) => event === num)
    return numOfEvents.length
  }

  if (events && attendees)
    return (
      <ul>
        {search?.map((event) => (
          <div key={event.id}>
            <div>
              <Link to={`/events/${event.id}`}>
                <div
                  data-testid="event-card"
                  className="shadow-lg hover:bg-gray-50 hover:shadow-xl inline-flex justify-start items-start gap-6 my-3 w-[880px] text-left bg-opacity-20 ease-in-out duration-200 hover:bg-opacity-50 hover:bg-gray-100h-52 p-6 bg-white rounded-lg border border-[#d9d9d9]"
                >
                  <img
                    className="w-40 h-40 object-cover rounded-lg"
                    src={`/events/${event.eventImage.length > 0 ? event.eventImage : defaultImg}`}
                    alt={event.title}
                  />
                  <div className="grow basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex  ">
                      <div className="flex flex-row space-x-4">
                        <p className="text-[#1e1e1e] text-md font-semibold  leading-[28.80px] ">
                          {`${dateToReadable(event.date)},`}{' '}
                          {TimeFormat(event.time)}{' '}
                          <span style={{ padding: '0 10px' }}> | </span>
                          {LocationFormat(event.location)}{' '}
                        </p>
                      </div>
                      <h1
                        className="self-stretch text-[#1e1e1e] text-2xl font-semibold  leading-[28.80px]"
                        data-testid="event-title"
                      >
                        {event.title}
                      </h1>
                      <div className="text-[#757575] text-sm font-normal  leading-relaxed ">
                        <p className="line-clamp-2">
                          {DescriptionFormat(event.description)}
                        </p>
                      </div>
                      <p className="opacity-60 self-stretch text-[#757575] text-sm font-normal  leading-tight">
                        {countAttendees(event.id)} attending
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    )
}
