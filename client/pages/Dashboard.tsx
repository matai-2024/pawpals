import { PetProfile } from '../../models/forms'
import LoadingSpinner from '../components/LoadingSpinner'
import usePetByOwnerId from '../hooks/use-pet-by-owner-id'

export default function Dashboard() {
  const { data, isPending, isError, error } = usePetByOwnerId(4)
  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet list: </h3>
        {String(error)}
      </div>
    )
  console.log('whats going on!', usePetByOwnerId)
  return (
    <>
      <br></br>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Your Furry ones!
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        placeholder text of a list of all upcoming events in your area...
      </p>
      <div className="flex gap-x-4">
        <ul>
          {data.map((profile: PetProfile) => (
            <li key={profile.ownerId}>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {profile.petName}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
