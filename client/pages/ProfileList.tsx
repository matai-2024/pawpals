import { PetProfile } from '../../models/forms.ts'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { usePets } from '../hooks/hooks.ts'
import PetCardVertical from '../components/utils/PetCard/petCardVertical.tsx'
import { ChangeEvent, useEffect, useState } from 'react'
import NotFound from '../components/NotFound404.tsx'

export default function ProfileList() {
  const { data, isPending, isError } = usePets()
  const defaultImg =
    'https://www.reginapolice.ca/wp-content/uploads/placeholder-9.png'
  const pulbicDir = 'pets'

  const [petSearch, setSearch] = useState(data)

  useEffect(() => {
    if (data) {
      setSearch(data)
    }
  }, [data])

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (!data) return
    const src = e.target.value
    const res = data.filter((obj) => {
      return obj.petName.toLowerCase().includes(src.toLowerCase())
    })
    setSearch(res)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevent action on Enter key
    }
  }

  if (isPending) return <LoadingSpinner />

  if (isError) return <NotFound />
  if (data)
    return (
      <>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-24">
          <div>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
              Pet Profiles
            </h1>
            <p className="mx-auto w-2/3 my-6 text-lg leading-8 text-gray-600 text-center">
              Meet the star of pawpals! Dive into their profile and see why
              every moment with them is an opportunity for unforgettable
              memories and boundless joy.
            </p>
            <div className="flex justify-center">
              <form className="form relative mb-3 mt-10">
                <span className="absolute left-4 top-3 opacity-50">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  data-testid="pet-card-search"
                  aria-label="Search pets"
                  id="search"
                  className="w-[600px]  mb-6 input rounded-full px-10 py-3 border-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={(e) => handleChange(e)}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Search pets..."
                ></input>
              </form>
            </div>
            <div className="px-6 flex flex-wrap gap-6  my-3 justify-center ">
              {petSearch?.map((profile: PetProfile) => (
                <div key={profile.id}>
                  <PetCardVertical
                    search={petSearch}
                    id={profile.id}
                    petName={profile.petName}
                    image={`/${pulbicDir}/${profile.image.length > 0 ? profile.image : defaultImg}`}
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
