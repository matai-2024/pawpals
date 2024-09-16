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
                  <div className=" px-6 pt-8 pb-10 bg-white shadow-lg  border border-gray-100 rounded-lg flex flex-col gap-6 ease-in-out duration-200">
                    <div className="relative w-36 h-36 rounded-full shadow-2xl overflow-hidden border-gray-100">
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
                        <h3 className="text-2xl text-gray-950 font-bold pb-4">
                          {profile.petName}
                        </h3>
                      </div>

                      <div className="shadow-lg hover:bg-yellow-500 ease-in-out duration-200 text-center rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-950 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                        View profile <span aria-hidden="true">→</span>
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
