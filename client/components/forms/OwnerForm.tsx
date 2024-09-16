import { useState } from 'react'
import FormWrapper from './FormWrapper'
import { CreateOwnerData } from '../../../models/forms'
interface Props {
  firstName: string
  lastName: string
  email: string
  controlSubmit: (form: CreateOwnerData) => void
}

export default function OwnerForm({
  firstName,
  lastName,
  email,
  controlSubmit: controlSubmit,
}: Props) {
  const [form, setForm] = useState({ firstName, lastName, email })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(form)
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    controlSubmit(form)
  }

  return (
    <FormWrapper title="Create an account">
      <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={form.firstName}
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
              onChange={handleChange}
              value={form.lastName}
              className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="lastName"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </FormWrapper>
  )
}
