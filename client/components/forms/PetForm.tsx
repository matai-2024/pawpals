import { PhotoIcon } from '@heroicons/react/24/solid'
import { ChangeEvent } from 'react'
import { PetFormProps } from '../../../models/forms.ts'
import Multiselect from './Multiselect.tsx'
import FormWrapper from './FormWrapper.tsx'

export default function PetForm({
  petName,
  image,
  dateOfBirth,
  gender,
  breed,
  species,
  bio,
  busy,
  lazy,
  goofy,
  gorgeous,
  brat,
  loyal,
  playful,
  adventurous,
  foodie,
  snorer,
  crazy,
  floofy,
  updateFields,
}: PetFormProps) {

  return (
    <FormWrapper title="Create a profile for your pet">
      <div className="sm:col-span-4">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="petName"
        >
          Pet name
        </label>
        <div className="mt-2">
          <input
            id="petName"
            name="petName"
            type="text"
            placeholder="Pet name"
            value={petName}
            onChange={(e) => updateFields({ petName: e.target.value })}
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
            id="species"
            name="species"
            value={species}
            onChange={(e) => updateFields({ species: e.target.value })}
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

      <div className="sm:col-span-3">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="breed"
        >
          Breed
        </label>
        <div className="mt-2">
          <input
            id="breed"
            name="breed"
            type="text"
            placeholder="Pet name"
            value={breed}
            onChange={(e) => updateFields({ breed: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Profile photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer ">
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-gray-300"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                className="relative rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                htmlFor="image"
              >
                <span>Upload a profile photo</span>
                <input
                  id="image"
                  name="image"
                  type="file"
                  value={image}
                  onChange={(e) => updateFields({ image: e.target.value })}
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
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => updateFields({ dateOfBirth: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
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
            id="bio"
            name="bio"
            placeholder="Write a few sentences about your pet"
            defaultValue={bio}
            onChange={(e) => updateFields({ bio: e.target.value })}
            rows={5}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="gender"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Gender
        </label>
        <div className="mt-2">
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="block w-full rounded-md border-0 py-1.5 shadow-sm shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
          htmlFor="traits"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Traits
        </label>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We&apos;ll always let you know about important changes, but you pick
          what else you want to hear about.
        </p>
        <div className="mt-2">
          <Multiselect handleChange={(e:ChangeEvent<HTMLSelectElement>) => updateFields({ gender: e.target.value })} />
        </div>
      </div>
    </FormWrapper>
  )
}
