import LoadingSpinner from '../components/LoadingSpinner'
import { ChangeEvent, useEffect, useState } from 'react'
import useFetchEvents from '../hooks/eventHooks/use-fetch-events'
import EventList from './EventList'
import NotFound from '../components/NotFound404'

export default function Events() {
  const { data: events, isPending, isError } = useFetchEvents()
  const [search, setSearch] = useState(events)

  useEffect(() => {
    if (events) {
      setSearch(events)
    }
  }, [events])

  if (isPending) return <LoadingSpinner />

  if (isError) return <NotFound />

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (!events) return
    const src = e.target.value
    const res = events.filter((obj) => {
      return obj.title.toLowerCase().includes(src.toLowerCase())
    })
    setSearch(res)
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevent action on Enter key
    }
  }

  if (events)
    return (
      <>
        <div className="flex items-center flex-col mx-auto text-center max-w-5xl py-32 sm:py-48 lg:py-24">
          <h1
            data-testid="title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Pet-friendly Events
          </h1>
          <p className="block my-6 text-lg leading-8 text-gray-600">
            Looking for exciting pet-friendly events in your area? Whether
            it&apos;s a dog-friendly market, a pet costume party, or a
            neighbourhood pet birthday bash, we&apos;ve got you covered!
            Discover local events where you and your furry friends can have a
            blast. Check out the latest pet events near you and make
            unforgettable memories with your best mate!
          </p>
          <div>
            <form className="form relative mb-3 mt-10">
              <span className="absolute left-4 top-3 opacity-50">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                aria-label="search"
                id="search"
                className="w-[600px] mb-6 input rounded-full px-10 py-3 border-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                onChange={(e) => handleChange(e)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Search events..."
              ></input>
            </form>
          </div>
          <EventList search={search} />
        </div>
      </>
    )
}
