import { Events } from '../components/utils/tempEvents'

export function EventList() {
  return (
    <>
      <div className="mx-auto  text-center max-w-5xl py-32 sm:py-48 lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Pet-friendly Events
        </h1>
        <p className="my-6 text-lg leading-8 text-gray-600">
          placeholder text of a list of all upcoming events in your area...
        </p>

        <ul>
          {Events.map((event) => (
            <li key={event.id}>
              <div className="flex w-auto my-6 items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
                <img
                  src="miso.jpg"
                  alt="test img"
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                />
                <div className="flex flex-col items-start px-14 leading-normal text-left">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="text-lg leading-8 text-gray-600">
                    {event.date} {event.time}
                  </p>
                  <p className="text-lg leading-8 text-gray-600">
                    {event.location}
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
    </>
  )
}

export default EventList
