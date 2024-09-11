import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { usePetById } from '../hooks/hooks.ts'

export default function Profile() {
  const { id } = useParams()
  const { data, isPending, isError, error } = usePetById(Number(id))

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
        <div id="profile" className="flex flex-col">
          <div>
            <div className="mb-6 w-52 h-52 rounded-full overflow-hidden">
              <img
                className="relative w-full -top-12"
                src={`../../${data.image}`}
                alt={data.petName}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {data.petName ? data.petName : 'Cutie Patootie'}
              </h1>
              <div className="flex gap-x-4">
                <p className="text-lg leading-8 text-gray-600">
                  {getAge(data.dateOfBirth) > 1
                    ? `${getAge(data.dateOfBirth)}yrs old`
                    : `${getAge(data.dateOfBirth)}yr old`}
                </p>
                <p className="text-lg leading-8 text-gray-600">{data.gender}</p>
                <p className="text-lg leading-8 text-gray-600">{data.breed}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <p className="text-xl font-semibold leading-8 text-gray-600">
              {data.dateOfBirth}
            </p>
            <p className="text-xl font-semibold leading-8 text-gray-600">
              {data.gender}
            </p>
            <p className="text-xl font-semibold leading-8 text-gray-600">
              {data.breed}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:gap-4">
            {data.busy === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">Busy</span>
            ) : (
              ''
            )}
            {data.lazy === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">Lazy</span>
            ) : (
              ''
            )}
            {data.goofy === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Goofy
              </span>
            ) : (
              ''
            )}
            {data.gorgeous === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Gorgeous
              </span>
            ) : (
              ''
            )}
            {data.brat === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">Brat</span>
            ) : (
              ''
            )}
            {data.loyal === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Loyal
              </span>
            ) : (
              ''
            )}
            {data.playful === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Playful
              </span>
            ) : (
              ''
            )}
            {data.adventurous === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Adventurous
              </span>
            ) : (
              ''
            )}
            {data.foodie === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Foodie
              </span>
            ) : (
              ''
            )}
            {data.snorer === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Snorer
              </span>
            ) : (
              ''
            )}
            {data.crazy === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Crazy
              </span>
            ) : (
              ''
            )}
            {data.floofy === 'on' ? (
              <span className="bg-yellow-400 rounded-full py-1 px-4">
                Floofy
              </span>
            ) : (
              ''
            )}
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">{data.bio}</p>
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
    </>
  )
}
