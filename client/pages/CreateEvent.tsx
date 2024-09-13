import { FormEvent, useState } from 'react'
import CreateEventForm from '../components/forms/create-event/CreateEventForm.tsx'
import { useNavigate } from 'react-router-dom'
import useCreateEvent from '../hooks/use-event-create.ts'

const INITIAL_DATA = {
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',
  eventImage: '',
  eventWebsite: '',
  audience: '',
}

export default function CreateEvent() {
  const [data, setData] = useState(INITIAL_DATA)
  const addEvent = useCreateEvent()
  const navigate = useNavigate()

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
    // eslint-disable-next-line no-console
    console.log(fields)
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const id = await addEvent.mutateAsync(data)
    navigate(`/events/${id}`)
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Create an Event
          </h1>
        </div>
        <div className="mt-10 flex items-center gap-x-6">
          <form onSubmit={onSubmit} className="w-full">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <CreateEventForm {...data} updateFields={updateFields} />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
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
