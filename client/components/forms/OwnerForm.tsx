import { OwnerFormProps } from '../../../models/forms.ts'
import FormWrapper from './FormWrapper'

export default function OwnerForm({
  firstName,
  lastName,
  updateFields,
}: OwnerFormProps) {
  return (
    <FormWrapper title="Create an account">
      <div className="sm:col-span-3">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="firstName"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="lastName"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </FormWrapper>
  )
}
