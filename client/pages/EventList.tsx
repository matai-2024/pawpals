import dateToReadable, {
  DescriptionFormat,
  LocationFormat,
  TimeFormat,
} from '../components/utils/Presentation'
import { Link } from 'react-router-dom'
import { Event } from '../../models/events'
import useAttendees from '../hooks/use-attendees'
import useFetchEvents from '../hooks/eventHooks/use-fetch-events'

interface Props {
  search: Event[] | undefined
}

export default function EventList({ search }: Props) {
  const { data: events } = useFetchEvents()

  const defaultImg =
    'https://www.reginapolice.ca/wp-content/uploads/placeholder-9.png'

  const { data: attendees } = useAttendees()

  function countAttendees(num: number) {
    const eventsArr = attendees?.map((guest: { eventId: number }) => {
      return guest.eventId
    })
    const numOfEvents = eventsArr?.filter((event: number) => event === num)
    return numOfEvents?.length
  }

  if (events && attendees)
    return (
      <ul className="xl:px-24">
        {search?.map((event) => (
          <div key={event.id} className="mb-6">
            <div>
              <Link to={`/events/${event.id}`}>
                <div
                  data-testid="event-card"
                  className="flex flex-col md:flex-row gap-6 md:px-6 md:pt-8 bg-white shadow-lg border border-gray-100 rounded-lg opacity-90 ease-in-out duration-200"
                >
                  <img
                    className="w-full md:w-40 h-40 object-cover md:rounded-lg"
                    src={`/events/${event.eventImage.length > 0 ? event.eventImage : defaultImg}`}
                    alt={event.title}
                  />
                  <div className="flex-col justify-start items-start grow basis-0 gap-4 mx-6 md:mx-0 mb-6 md:mb-0">
                    <div className="flex flex-col self-stretch justify-start items-start gap-2">
                      <div className="flex flex-row space-x-4">
                        <p className="text-[#1e1e1e] text-md font-semibold leading-[28.80px] ">
                          {`${dateToReadable(event.date)},`}{' '}
                          {TimeFormat(event.time)}{' '}
                          <span style={{ padding: '0 10px' }}> | </span>
                          {LocationFormat(event.location)}{' '}
                        </p>
                      </div>
                      <h1
                        className="self-stretch text-[#1e1e1e] text-2xl font-semibold leading-[28.80px]"
                        data-testid="event-title"
                      >
                        {event.title}
                      </h1>
                      <div className="text-[#757575] text-sm font-normal leading-relaxed ">
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
