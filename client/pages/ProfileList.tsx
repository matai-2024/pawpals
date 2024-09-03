import { Link } from 'react-router-dom'
import { Pet } from '../../models/forms.ts'
import Nav from '../components/Nav.tsx'
import { usePets } from '../hooks/hookPets.ts'
import LoadingSpinner from '../components/LoadingSpinner.tsx'

export default function ProfileList() {
  const { data, isPending, isError, error } = usePets()
  console.log('Profiles: ', data)

  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet list: </h3>
        {String(error)}
      </div>
    )

  return (
    <div>
      <Nav />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Pet Profiles
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              {data.map((profile: Pet) => (
                <>
                  <div
                    key={profile.id}
                    className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400"
                  >
                    <div className="relative">
                      <img
                        className="w-full h-48 object-cover"
                        src={profile.image}
                        alt={profile.petName}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-xl font-semibold text-gray-800">
                        {profile.petName}
                      </div>
                      <p className="text-gray-600">{profile.gender}</p>
                      <p className="text-gray-600">{profile.breed}</p>
                    </div>
                    <div className="px-6 py-4">
                      {profile.busy === 'on' ? (
                        <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-yellow rounded-full">
                          Busy
                        </span>
                      ) : (
                        ''
                      )}
                      {profile.lazy === 'on' ? (
                        <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-yellow rounded-full">
                          Lazy
                        </span>
                      ) : (
                        ''
                      )}
                      {profile.brat === 'on' ? (
                        <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-yellow rounded-full">
                          Brat
                        </span>
                      ) : (
                        ''
                      )}
                      {profile.foodie === 'on' ? (
                        <span className="inline-block px-2 py-1 font-semibold text-purple-900 bg-yellow rounded-full">
                          Foodie
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="px-6 py-4">
                      <Link
                        to={`/profiles/${profile.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        View Profile <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
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
    </div>
  )
}

// TODO: update data selectors from snake case to camel case
