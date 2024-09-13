import { PetProfile } from '../../models/forms'
import LoadingSpinner from '../components/LoadingSpinner'
import usePetByOwnerId from '../hooks/use-pet-by-owner-id'

export default function Dashboard() {
  const { data, isPending, isError, error } = usePetByOwnerId(3)
  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet list: </h3>
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
      <br></br>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        My Pets
      </h1>
      <div className="flex gap-x-4">
        <ul>
          {data.map((profile: PetProfile) => (
            <li key={profile.ownerId}>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {profile.petName}
              </h3>
              <div className="mb-6 w-52 h-52 rounded-full overflow-hidden">
                <img
                  className="relative w-full -top-12"
                  src={`../../${profile.image}`}
                  alt={profile.petName}
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {profile.petName ? profile.petName : 'Cutie Patootie'}
                </h1>
                <div className="flex gap-x-4">
                  <p className="text-lg leading-8 text-gray-600">
                    {getAge(profile.dateOfBirth) > 1
                      ? `${getAge(profile.dateOfBirth)}yrs old`
                      : `${getAge(profile.dateOfBirth)}yr old`}
                  </p>
                  <p className="text-lg leading-8 text-gray-600">
                    {profile.gender}
                  </p>
                  <p className="text-lg leading-8 text-gray-600">
                    {profile.breed}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
