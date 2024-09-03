import { PhotoIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent, ChangeEvent } from 'react'
import { PetData } from '../../../models/forms.ts'
import * as hooks from '../../hooks/hooks.ts'
import Checkbox from './Checkbox.tsx'

export default function EditPetForm() {
  const initialVal: PetData = {
    ownerId: 1,
    petName: '',
    image: '',
    dateOfBirth: '',
    gender: '',
    breed: '',
    species: '',
    bio: '',
    trait: '',
    busy: '',
    lazy: '',
    goofy: '',
    gorgeous: '',
    brat: '',
    loyal: '',
    playful: '',
    adventurous: '',
    foodie: '',
    snorer: '',
    crazy: '',
    floofy: '',
  }

  const [formState, setFormState] = useState<PetData>(initialVal)
  const addPet = hooks.useCreatePet()
  const navigate = useNavigate()
  // console.log('Mutation', addPet)

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    // const { name, value } = evt.target.checked
    const { name, value } = evt.target
    console.log(`Form field ${name}: ${value}`)
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()
    const id = await addPet.mutateAsync(formState)
    navigate(`/profiles/${id}`)
  }

  return (
    <div key="pet-form">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="petName"
                >
                  Pet name
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={formState.petName || ''}
                    type="text"
                    name="petName"
                    id="petName"
                    placeholder="Pet name"
                    className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="species"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Species
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleChange}
                    id="species"
                    name="species"
                    value={formState.species || ''}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Please select</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Rabbit</option>
                    <option>Horse</option>
                    <option>Fish</option>
                    <option>Bird</option>
                    <option>Reptile</option>
                    <option>Alien</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Profile photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        htmlFor="image"
                      >
                        <span>Upload a profile photo</span>
                        <input
                          onChange={handleChange}
                          value={formState.image || ''}
                          type="file"
                          name="image"
                          id="image"
                          accept="image/png, image/jpeg, image/gif"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="dateOfBirth"
                >
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={formState.dateOfBirth || ''}
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleChange}
                    id="gender"
                    name="gender"
                    value={formState.gender || ''}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Please select</option>
                    <option>Girlie pop</option>
                    <option>Boy</option>
                    <option>Non-binary</option>
                    <option>Unknown</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="breed"
                >
                  Breed
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={formState.breed || ''}
                    type="text"
                    name="breed"
                    id="breed"
                    placeholder="Pet name"
                    className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="bio"
                className="block text-sm font-medium leading-6 text-gray-900 mt-8"
              >
                Bio
              </label>
              <div className="mt-2">
                <textarea
                  onChange={handleChange}
                  id="bio"
                  name="bio"
                  placeholder="Write a few sentences about your pet"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-10 col-span-full">
                <fieldset>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Traits
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    We&apos;ll always let you know about important changes, but
                    you pick what else you want to hear about.
                  </p>
                  <div className="flex flex-row flex-wrap gap-3 mt-6">
                    <Checkbox onChange={handleChange} />
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-yellow px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
