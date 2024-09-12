import Nav from '../components/Nav'
import { Events } from '../components/utils/tempEvents'

export function EventList() {
  return (
    <>
      <Nav />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Pet-friendly Events
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        placeholder text of a list of all upcoming events in your area...
      </p>
      <div className="flex gap-x-4">
        <ul>
          {Events.map((event) => (
            <li key={event.id}>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {event.title}
              </h3>
              <p className="text-lg leading-8 text-gray-600">
                {event.location}
              </p>
              <p className="text-lg leading-8 text-gray-600">{event.date}</p>
              <p className="text-lg leading-8 text-gray-600">{event.time}</p>
              <p className="text-lg leading-8 text-gray-600">
                {event.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default EventList
