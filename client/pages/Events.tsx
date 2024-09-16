import LoadingSpinner from '../components/LoadingSpinner'
import { ChangeEvent, useEffect, useState } from 'react'
import useFetchEvents from '../hooks/use-fetch-events'
import EventList from './EventList'

export default function Events() {
  const { data: events, isPending, isError, error } = useFetchEvents()
  const [search, setSearch] = useState(events)

  useEffect(() => {
    if (events) {
      setSearch(events)
    }
  }, [events])

  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet data: </h3>
        {String(error)}
      </div>
    )

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (!events) return
    const src = e.target.value
    const res = events.filter((obj) => {
      return obj.title.toLowerCase().includes(src.toLowerCase())
    })
    setSearch(res)
  }

  if (events)
    return (
      <>
        <div className="mx-auto text-center max-w-5xl py-32 sm:py-48 lg:py-24">
          <h1
            data-testid="title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Pet-friendly Events
          </h1>
          <label
            className="block my-6 text-lg leading-8 text-gray-600"
            htmlFor="search"
          >
            Search the latest pet-friendly events in your area.
          </label>
          <input
            id="search"
            className="w-5/12 rounded-md border-2 mb-5 border-gray-400"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Search events..."
          ></input>

          <EventList search={search} />
        </div>
      </>
    )
}
