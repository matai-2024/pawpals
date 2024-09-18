import { Link, useParams } from 'react-router-dom'
import dateToReadable, { TimeFormat } from '../components/utils/Presentation'
import LoadingSpinner from '../components/LoadingSpinner'
import useEventById from '../hooks/eventHooks/use-event-by-id.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { useAttendeeByEventId, useOwnerByEventId } from '../hooks/hooks.ts'
import NotFound from '../components/NotFound404.tsx'

export default function EventDetails() {
  const { user, isAuthenticated } = useAuth0()
  const params = useParams()
  const id = Number(params.id)
  const { data: event, isLoading, isError } = useEventById(id)
  const { data: owner } = useOwnerByEventId(id)
  const { data: attendees } = useAttendeeByEventId(id)
  const defaultImg =
    'https://www.reginapolice.ca/wp-content/uploads/placeholder-9.png'

  if (isLoading) return <LoadingSpinner />

  if (isError) return <NotFound />

  if (event) {
    return (
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-24">
        <div className="mb-12">
          <h1
            data-testid="title"
            className="text-5xl font-bold tracking-tight text-gray-900 mb-8"
          >
            {event.title}
          </h1>

          <div className="flex flex-row justify-between items-center gap-8">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="object-cover"
                  src="../icons/placeholder-user.png"
                  alt={owner?.firstName}
                />
              </div>
              <h3 data-testid="owner" className="text-xl text-gray-600">
                Hosted by {owner?.firstName} {owner?.lastName.charAt(0)}.
              </h3>
            </div>
            <div className="justify-start items-center gap-8 inline-flex">
              {isAuthenticated && user?.sub === owner?.externalKey ? (
                <>
                  <Link
                    to={`/events/${id}/edit`}
                    onClick={() => window.scroll(0, 0)}
                  >
                    <button className="text-lg text-gray-500 hover:text-blue-500 ease-in-out duration-200 flex items-center space-x-3">
                      <i className="fa-solid fa-pen-to-square"></i>
                      <span>Edit event</span>
                    </button>
                  </Link>
                  <Link
                    to={`/events/${id}/delete`}
                    onClick={() => window.scroll(0, 0)}
                  >
                    <button className="text-lg text-gray-500 hover:text-red-700 ease-in-out duration-200 flex items-center space-x-3">
                      <i className="fa-solid fa-trash"></i>
                      <span>Delete event</span>
                    </button>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="w-full max-h-[350px] rounded-xl overflow-hidden">
            <img
              className="object-cover relative -top-28"
              src={`/events/${event.eventImage.length > 0 ? event.eventImage : defaultImg}`}
              alt=""
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-4 mb-12 text-gray-950">
              <div className="flex gap-4">
                <i className="fa-solid fa-clock text-2xl w-10"></i>
                <h4 className="text-xl font-semibold">
                  {dateToReadable(event.date)}, {TimeFormat(event.time)}
                </h4>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-location-dot text-3xl w-10"></i>
                <h4 className="text-xl font-semibold">{event.location}</h4>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-12">
              <h5 className="text-2xl font-semibold">Details</h5>
              <p>{event.description}</p>
            </div>
            <div>
              <button className="w-full rounded-md bg-yellow-400 hover:bg-yellow-500 ease-in-out duration-200 px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Attend
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-20 mt-28">
          <h2 className="text-3xl font-semibold">
            Attendees{' '}
            <span className="text-gray-500 font-normal">
              ({attendees?.length})
            </span>
          </h2>
          <div className="flex flex-wrap gap-6">
            {attendees?.map((pet) => (
              <Link
                key={`pet-${pet.petName}`}
                to={`/profiles/${pet.petId}`}
                onClick={() => window.scroll(0, 0)}
              >
                <div className="flex flex-col gap-6 items-center opacity-90 px-6 pt-6 pb-8 shadow-lg border border-gray-100 rounded-lg hover:bg-gray-50 hover:shadow-xl ease-in-out duration-200">
                  <div className="relative w-24 h-24 rounded-full shadow-2xl overflow-hidden border-gray-100">
                    <img
                      className="object-cover relative -top-7 "
                      src={pet.image ? `/pets/${pet.image}` : defaultImg}
                      alt={pet.petName}
                    />
                  </div>
                  <div className="flex-col gap-2 flex">
                    <h3 className="text-2xl text-gray-950 font-bold">
                      {pet.petName}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
            {attendees?.length === 0 && (
              <p className="text-gray-600">Be the first to join this event.</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
