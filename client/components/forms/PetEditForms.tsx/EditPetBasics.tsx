import { PetFormProps } from '.../../../models/forms.ts'
import FormWrapper from '../FormWrapper.tsx'

export default function EditPetBasics({
  petName,
  dateOfBirth,
  gender,
  breed,
  species,
  updateFields,
}: PetFormProps) {
  return (
    <FormWrapper title="Tell us about your pet">
      <div className="sm:col-span-4">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="petName"
        >
          Pet name
        </label>
        <div className="mt-2">
          <input
            required={true}
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
            required={true}
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
            placeholder="Breed"
            value={breed}
            onChange={(e) => updateFields({ breed: e.target.value })}
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
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Please select</option>
            <option>Girlie pop</option>
            <option>Boy</option>
            <option>Non-binary</option>
            <option>Unknown</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="dateOfBirth"
        >
          Date of birth
        </label>
        <div className="mt-2">
          <input
            required={true}
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => updateFields({ dateOfBirth: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </FormWrapper>
  )
}
