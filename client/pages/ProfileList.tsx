import { Link } from 'react-router-dom'
import { PetProfile } from '../../models/forms.ts'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { usePets } from '../hooks/hooks.ts'

export default function ProfileList() {
  const { data, isPending, isError, error } = usePets()

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
    <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Pet Profiles
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          {data.map((profile: PetProfile) => (
            <div
              key={profile.id}
              className="w-1/5 h-72 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl relative"
            >
              <Link to={`/profiles/${profile.id}`}>
                <img
                  className="w-full h-full object-cover"
                  src={profile.image}
                  alt={profile.petName}
                />
                <div className="absolute h-32 inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 from-10% opacity-80"></div>
                <div className="absolute bottom-4 inset-x-0">
                  <div className="text-2xl font-bold text-white">
                    {profile.petName},{' '}
                    {getAge(profile.dateOfBirth) > 1
                      ? `${getAge(profile.dateOfBirth)}yrs`
                      : `${getAge(profile.dateOfBirth)}yr`}
                  </div>
                  <div className="mt-1 text-md text-white uppercase tracking-widest">
                    Location
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
