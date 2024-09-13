import { Events } from '../components/utils/tempEvents'
import { dateToReadable } from '../components/utils/EventPresentation'
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
              <div className="self-stretch p-3 flex-col justify-start items-start gap-6 flex">
                <div className="w-[880px] bg-opacity-20 hover:bg-opacity-50 hover:bg-gray-100 text-left h-52 p-6 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start gap-6 inline-flex">
                  <img
                    className="w-40 h-40"
                    src="public/luna.jpg"
                    alt={`${event.title}`}
                  />
                  <div className="grow  shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex">
                      <p className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                        {`${dateToReadable(event.date)},`}{' '}
                        {event.time.toUpperCase()}
                      </p>
                      <h1 className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                        {event.title}
                      </h1>
                      <p className="self-stretch text-[#1e1e1e] text-xl font-semibold font-['Inter'] leading-[28.80px]">
                        {event.location}
                      </p>
                      <p className="text-[#757575] text-sm font-normal font-['Inter'] leading-tight">
                        {event.description}
                      </p>
                      <p className="opacity-60 self-stretch text-[#757575] text-sm font-normal font-['Inter'] leading-tight">
                        x attending
                      </p>
                    </div>
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