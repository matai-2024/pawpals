import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useCreatePet from '../../../hooks/pets/use-pet-create'
import { useAuth0 } from '@auth0/auth0-react'
import { PetProfileDataInit } from '../../../../models/forms'
import useMultistepForm from '../../../hooks/use-multistep-form'
import EditPetBasics from './EditPetBasics'
import EditPetTraits from './EditPetTraits'
import EditPetProfile from './EditPetProfile'

const INITIAL_DATA = {
  // get owner by sign-in ID
  petName: '',
  image: '',
  dateOfBirth: '',
  gender: '',
  breed: '',
  species: '',
  bio: '',
  busy: 'false',
  lazy: 'false',
  goofy: 'false',
  gorgeous: 'false',
  brat: 'false',
  loyal: 'false',
  playful: 'false',
  adventurous: 'false',
  foodie: 'false',
  snorer: 'false',
  crazy: 'false',
  floofy: 'false',
}

export default function Signup() {
  const [data, setData] = useState(INITIAL_DATA)
  const addPet = useCreatePet() // UPDATE THIS
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  function updateFields(fields: Partial<PetProfileDataInit>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
    // eslint-disable-next-line no-console
    console.log(data)
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <EditPetBasics
        {...data}
        updateFields={updateFields}
        key={'edit-pet-basics-form'}
      />,
      <EditPetTraits
        {...data}
        updateFields={updateFields}
        key={'edit-pet-traits-form'}
      />,
      <EditPetProfile
        {...data}
        updateFields={updateFields}
        key={'edit-pet-form'}
      />,
    ])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLastStep) {
      next()
    } else {
      const token = await getAccessTokenSilently()
      const id = await addPet.mutateAsync({ data, token })
      navigate(`/profiles/${id}`)
    }
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
        <div className="">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Edit you Pets profile
          </h1>
        </div>
        <div className="mt-6 flex items-center gap-x-6">
          <form onSubmit={onSubmit} className="w-full">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {step}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start mt-6 gap-x-6 text-sm font-semibold leading-6 text-gray-900">
              <div className="flex-grow">
                <h2 className="text-gray-600">
                  Step {currentStepIndex + 1} / {steps.length}
                </h2>
              </div>
              <div className="flex gap-x-6">
                {!isFirstStep && (
                  <button
                    type="button"
                    onClick={() => (back(), window.scrollTo(0, 0))}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isLastStep ? 'Complete' : 'Continue'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}
