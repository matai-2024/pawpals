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
    <>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-24">
        <div>
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
            Pet Profiles
          </h1>
          <p className="my-6 text-lg leading-8 text-gray-600 text-center max-w-prose mx-auto">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="px-6 flex flex-wrap gap-6 mb-20">
            {data.map((profile: PetProfile) => (
              <div key={profile.id}>
                <Link to={`${profile.id}`}>
                  <div className=" p-6 py-6 bg-white hover:bg-gray-50 shadow-lg hover:shadow-lg border border-gray-100 rounded-lg flex flex-col gap-6 ease-in-out duration-200">
                    <div className="relative m-2 w-36 h-36 rounded-full shadow-lg overflow-hidden border-gray-100">
                      <img
                        className="object-cover relative -top-7 "
                        src={profile.image}
                        alt={profile.petName}
                      />
                    </div>
                    <div className="h-28 flex-col gap-2 flex">
                      <p className="text-sm text-gray-800 font-semibold">
                        {getAge(profile.dateOfBirth) > 1
                          ? `${getAge(profile.dateOfBirth)}yrs, ${profile.breed}`
                          : `${getAge(profile.dateOfBirth)}yr, ${profile.breed}`}
                      </p>

                      <div>
                        <h3 className="text-2xl text-gray-950 font-semibold">
                          {profile.petName}
                        </h3>
                      </div>
                      <div className="text-gray-600 text-sm font-normal leading-tight">
                        <p className="line-clamp-3">{profile.species}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
