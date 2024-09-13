import Nav from '../components/Nav'
import { Events } from '../components/utils/tempEvents'

export function EventList() {
  return (
    <>
      <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-24">
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
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                  <img
                    src="public/miso.jpg"
                    alt="test img"
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {event.title}
                    </h3>
                    <p className="text-lg leading-8 text-gray-600">
                      {event.location}
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                      {event.date}
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                      {event.time}
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default EventList
