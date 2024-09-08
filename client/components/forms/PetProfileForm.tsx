import { PhotoIcon } from '@heroicons/react/24/solid'
import { PetFormProps } from '../../../models/forms.ts'
import FormWrapper from './FormWrapper.tsx'

export default function PetProfileForm({
  image,
  bio,
  updateFields,
}: PetFormProps) {
  return (
    <FormWrapper title="Create a profile for your pet">
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
    </FormWrapper>
  )
}
