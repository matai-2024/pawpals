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
          <div className="mt-10 grid grid-cols-5 gap-x-8 gap-y-8  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {data.map((profile: PetProfile) => (
              <div
                key={profile.id}
                className="shadow-lg hover:shadow-xl relative group duration-500 group overflow-hidden  text-gray-50 h-64 w-56  rounded-2xl hover:duration-700 "
              >
                <Link to={`${profile.id}`}>
                  <div className="w-full h-full">
                    <img
                      className="rounded-2xl object-cover object-center w-full h-full"
                      src={profile.image}
                      alt={profile.petName}
                    />
                  </div>
                  <div className="opacity-90 rounded-lg absolute bg-gray-50 -bottom-12 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 ease-in-out group-hover:bg-yellow-100 group-hover:border-yellow-400 group-hover:opacity-90">
                    <span className="text-[#2b2b2d] font-['Inter'] font-bold text-2xl pb-6 align-text-top">
                      {profile.petName}
                    </span>
                    <div className="flex flex-row justify-between">
                      <span className="text-[#2b2b2d] font-['Inter'] font-bold text-xs">
                        {profile.breed}
                      </span>
                      <span className="opacity-70 text-right text-[#2b2b2d] text-[13px] font-medium font-['Inter'] leading-none">
                        {getAge(profile.dateOfBirth) > 1
                          ? `${getAge(profile.dateOfBirth)}yrs`
                          : `${getAge(profile.dateOfBirth)}yr`}
                      </span>
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
