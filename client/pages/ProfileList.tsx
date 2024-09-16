import { PetProfile } from '../../models/forms.ts'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { usePets } from '../hooks/hooks.ts'
import PetCardVertical from '../components/utils/PetCard/petCardVertical.tsx'

export default function ProfileList() {
  const { data, isPending, isError, error } = usePets()
  const pulbicDir = 'pets'

  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet list: </h3>
        {String(error)}
      </div>
    )

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
                <PetCardVertical
                  id={profile.id}
                  petName={profile.petName}
                  image={`${pulbicDir}/${profile.image}`}
                  dateOfBirth={profile.dateOfBirth}
                  breed={profile.breed}
                  species={profile.species}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
