import { Link, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { getAge } from '../components/utils/Presentation.tsx'
import {
  usePetById,
  useEventsByPetId,
  useOwnerByPetId,
} from '../hooks/hooks.ts'
import dateToReadable, {
  TimeFormat,
} from '../components/utils/Presentation.tsx'
import useDocumentTitle from '../hooks/use-document-title.ts'

export default function Profile() {
  const { id } = useParams()
  const { data, isPending, isError, error } = usePetById(Number(id))
  const events = useEventsByPetId(Number(id)).data
  const owner = useOwnerByPetId(Number(id)).data
  const rootUrl = '../../pets'

  useDocumentTitle(
    data?.petName
      ? `${data?.petName}'s Profile | pawpals`
      : 'Pet Profile | pawpals',
  )

  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet data: </h3>
        {String(error)}
      </div>
    )

  function getTraits() {
    const active = Object.entries(data || {})
    const filteredActive = active.filter((trait) => trait[1] === 'on')
    const mappedActive = filteredActive.map((trait) => {
      return trait[0]
    })
    return mappedActive
  }
  const activeTraits = getTraits()

  if (data)
    return (
      <>
        <div className="mx-auto max-w-5xl pt-24 sm:pt-32 lg:pt-24">
          <div className="flex flex-col justify-center items-center shadow-2xl rounded-4xl">
            <div className="h-72 overflow-hidden rounded-t-4xl">
              <img
                src="../cover-photo2.webp"
                alt="mountain scape"
                className="relative -top-72"
              />
            </div>
            <div className="relative -top-28 px-10">
              <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-white">
                <img
                  className="object-cover min-h-48 relative -top-8"
                  src={data.image ? `../../${data.image}` : `../../miso.webp`}
                  alt={data.petName}
                />
              </div>
              <h1 className="text-gray-950 text-6xl font-bold pb-8 mt-4">
                {data.petName}
              </h1>
              <div className="flex gap-x-8">
                <div className="flex flex-row gap-4">
                  <i className="fa-solid fa-cake-candles text-3xl text-gray-950"></i>
                  <h2 data-testid="age-heading" className="text-xl">
                    {getAge(data.dateOfBirth) > 1
                      ? `${getAge(data.dateOfBirth)}yrs old`
                      : `${getAge(data.dateOfBirth)}yr old`}
                  </h2>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="fa-solid fa-transgender text-3xl text-gray-950"></i>
                  <h2 className="text-xl">{data.gender}</h2>
                </div>
                <div className="flex flex-row gap-4">
                  <i className="fa-solid fa-paw text-3xl text-gray-950"></i>
                  <h2 className="text-xl">{data.breed}</h2>
                </div>
              </div>
              <div className="my-10">{data.bio}</div>
              <div className="flex flex-wrap gap-2 mt-4">
                {activeTraits.map((trait) => (
                  <span
                    key={`trait-${trait}`}
                    className="px-4 p-2 bg-yellow-300 rounded-full text-gray-950"
                  >
                    {trait.charAt(0).toUpperCase()}
                    {trait.slice(1)}
                  </span>
                ))}
              </div>
              <div className="mt-12 justify-start items-center gap-4 inline-flex">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="object-cover"
                    src="../placeholder-user.png"
                    alt={owner?.firstName}
                  />
                </div>
                <h3 data-testid="owner" className="text-xl text-gray-600">
                  Owner: {owner?.firstName} {owner?.lastName.charAt(0)}.
                </h3>
              </div>
            </div>

            <div className="px-10 grid grid-cols-3 gap-6 mb-20">
              <h2 className="col-span-3 text-3xl font-semibold">
                Find {data.petName} at these events
              </h2>
              {events?.map((event) => (
                <Link to={`/events/${event.id}`} key={`event-${event.id}`}>
                  <div className="col-span-1 h-96 p-4 py-6 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100 rounded-lg flex-col gap-6 inline-flex ease-in-out duration-200">
                    <div className="rounded-lg overflow-hidden h-40">
                      <img
                        className="min-h-44 object-cover"
                        src={`../${event.eventImage}`}
                        alt={event.title}
                      />
                    </div>
                    <div className="h-44 flex-col gap-2 flex">
                      <p className="text-sm text-gray-800 font-semibold">
                        {`${dateToReadable(event.date)},`}{' '}
                        {TimeFormat(event.time)}
                      </p>

                      <div>
                        <h3 className="text-xl text-gray-950 font-semibold">
                          {event.title}
                        </h3>
                      </div>
                      <div className="text-gray-600 text-sm font-normal leading-tight">
                        <p className="line-clamp-3">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </>
    )
}
