import { Events } from '../components/utils/tempEvents'

export function EventList() {
  function dateToReadable(date: string) {
    const split = date.split('-')
    split.pop()
    const string = split.toString()
    const hash = string.split(',').join('/')
    return hash
  }

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
              <div className="flex justify-start w-880px gap-6 my-8 items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
                <img
                  src="public/luna.jpg"
                  alt={`${event.title}`}
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                />
                <div className="flex flex-col items-start px-14 leading-normal text-left">
                  <p className=" leading-snug text-gray-900 text-base font-semibold">
                    {dateToReadable(event.date)} {event.time}
                  </p>
                  <h3 className="self-stretch  leading-[28.80px] text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="leading-snug text-gray-900 text-base font-semibold">
                    {event.location}
                  </p>
                  <p className="self-stretch leading-tight text-sm font-normal text-gray-600">
                    {event.description}
                  </p>

                  <div className="self-stretch text-[#b3b3b3] gap-2 pt-6 text-sm font-normal font-['Inter'] leading-tight">
                    26 Attending
                  </div>
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
