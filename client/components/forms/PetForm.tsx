import { useState } from 'react'
import { formFields } from './formFields'
import { PetData } from '../../../models/forms.ts'
import {
  TextField,
  TextAreaField,
  CheckboxField,
  SelectField,
} from './formInputs.tsx'

const initialVal: PetData = {
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
  const [form, setForm] = useState<Step1Values>(initialVal)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
    setForm(initialVal)
  }

  const fields = formFields
  const fieldArr = Object.keys(formFields)

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
        default:
          return null
      }
    })
  }

  return (
    <div key="step-one">
      <form onSubmit={handleSubmit}>
        <h2>Build your pet profile</h2>
        <p>Share what makes your pet unique</p>
        {handleFields()}
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
