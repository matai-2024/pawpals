import { useState } from 'react'
import { formFields } from './formFields'
import { FormInput, PetData } from '../../../models/forms.ts'
import {
  TextField,
  TextAreaField,
  CheckboxField,
  SelectField,
  FileField,
} from './formInputs.tsx'
import { useCreatePet } from '../../hooks/api.ts'
import { useNavigate } from 'react-router-dom'

const initialVal: PetData = {
  ownerId: 0,
  petName: '',
  dateofBirth: '',
  sex: '',
  breed: '',
  species: '',
  bio: '',
  faveFood: '',
  traits: '',
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

export default function PetForm() {
  const [form, setForm] = useState<PetData>(initialVal)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }

  const createPet = useCreatePet()
  const navigate = useNavigate()
  
  async function handleSubmit(data: PetData) {
    await createPet.mutateAsync(data)
    navigate(`/profiles/${data.petName}`)
  }

  const fields: FormInput = formFields
  const fieldArr: string[] = Object.keys(formFields)

  function handleFields() {
    return fieldArr.map((type: string) => {
      switch (fields[type].type) {
        case 'text':
        case 'date':
          return (
            <TextField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
        case 'textarea':
          return (
            <TextAreaField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
        case 'checkbox':
          return (
            <CheckboxField
              handleChange={handleChange}
              fields={fields}
              type={type}
            />
          )
        case 'select':
          return (
            <SelectField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
          case 'file':
          return (
            <FileField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
        default:
          return null
      }
    })
  }

  return (
    <div key="pet-form">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {handleFields()}
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
