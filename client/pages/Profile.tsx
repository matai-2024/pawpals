import { Link, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import {
  usePetById,
  useEventsByPetId,
  useOwnerByPetId,
} from '../hooks/hooks.ts'
import dateToReadable, {
  TimeFormat,
} from '../components/utils/EventPresentation.tsx'

interface TraitObj {
  key: string
  label: string
}

const traits = [
  { key: 'busy', label: 'Busy' },
  { key: 'lazy', label: 'Lazy' },
  { key: 'goofy', label: 'Goofy' },
  { key: 'gorgeous', label: 'Gorgeous' },
  { key: 'brat', label: 'Brat' },
  { key: 'loyal', label: 'Loyal' },
  { key: 'playful', label: 'Playful' },
  { key: 'adventurous', label: 'Adventurous' },
  { key: 'foodie', label: 'Foodie' },
  { key: 'snorer', label: 'Snorer' },
  { key: 'crazy', label: 'Crazy' },
  { key: 'floofy', label: 'Floofy' },
] as TraitObj[]

export default function Profile() {
  const { id } = useParams()
  const { data, isPending, isError, error } = usePetById(Number(id))
  const events = useEventsByPetId(Number(id)).data
  const owner = useOwnerByPetId(Number(id)).data

  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet data: </h3>
        {String(error)}
      </div>
    )

  function getAge(dateString: string) {
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <>
      <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-32">
        <div className="mt-10 grid grid-cols-5 gap-12 items-center">
          <div className="col-span-2 h-[450px] overflow-hidden rounded-xl">
            <img
              className="object-cover min-h-[520px] relative -top-8"
              src={data.image ? `../../${data.image}` : `../../miso.jpg`}
              alt={data.petName}
            />
          </div>
          <div className="col-span-3">
            <div>
              <h1 className="text-gray-950 text-6xl font-bold pb-8">
                {data.petName}
              </h1>
              <h2 className="text-gray-950 text-2xl font-normal">
                {getAge(data.dateOfBirth) > 1
                  ? `${getAge(data.dateOfBirth)}yrs old`
                  : `${getAge(data.dateOfBirth)}yr old`}
                , {data.gender}, {data.breed}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {traits.map(
                  (trait) =>
                    data[trait.key] === 'on' && (
                      <span
                        key={trait.key}
                        className="px-4 p-2 bg-yellow-300 rounded-full text-gray-950"
                      >
                        {trait.label}
                      </span>
                    ),
                )}
              </div>
              <div className="mt-12 justify-start items-center gap-4 inline-flex">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="object-cover"
                    src="../placeholder-user.png"
                    alt="owner"
                  />
                </div>
                <h3 className="text-xl text-gray-600">
                  {owner?.firstName} {owner?.lastName.charAt(0)}.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">About me</h2>
          <p className="text-lg text-gray-600">{data.bio}</p>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6">
          <h2 className="col-span-3 text-3xl font-semibold">
            Find me at these events
          </h2>
          {events?.map((event) => (
            <Link to={`/events/${event.id}`} key={`event-${event.id}`}>
              <div className="col-span-1 h-96 p-4 py-6 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg border rounded-lg flex-col gap-6 inline-flex ease-in-out duration-200">
                <img
                  className="h-40 rounded-lg"
                  src={`../${event.eventImage}`}
                  alt={event.title}
                />
                <div className="h-44 flex-col gap-2 flex">
                  <p className="text-sm text-blue-800 font-semibold">
                    {`${dateToReadable(event.date)},`} {TimeFormat(event.time)}
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

        <div
          aria-hidden="on"
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
