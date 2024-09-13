import { Events } from '../components/utils/tempEvents'
import {
  dateToReadable,
  TimeFormat,
} from '../components/utils/EventPresentation'
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
                <div className="w-[880px] bg-opacity-20 ease-in-out duration-200 hover:bg-opacity-50 hover:bg-gray-100 text-left h-52 p-6 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start gap-6 inline-flex">
                  <img
                    className="w-40 h-40"
                    src="data:image/jpeg;base64,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"
                    alt={`${event.title}`}
                  />
                  <div className="grow  shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex">
                      <p className="self-stretch text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                        {`${dateToReadable(event.date)},`}{' '}
                        {TimeFormat(event.time)}
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
