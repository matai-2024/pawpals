import { Link, useNavigate, useParams } from 'react-router-dom'
import dateToReadable, {
  TimeFormat,
} from '../components/utils/EventPresentation'
import usePets from '../hooks/use-pets'
import LoadingSpinner from '../components/LoadingSpinner'
import useEventById from '../hooks/eventHooks/useEventById'
import useDelEvent from '../hooks/eventHooks/useDeleteEvent'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/utils/Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function EventDetails() {
  const navigate = useNavigate()
  const deleteEvent = useDelEvent()
  const { user, isAuthenticated } = useAuth0
  const params = useParams()
  const id = Number(params.id)
  const { data: pets, isLoading, isError, error } = usePets()
  const { data: evts } = useEventById(id)

  function handleEditEvent(id: number) {
    navigate(`/edit-event/${id}`)
  }

  function handleDeleteEvent(id: number) {
    deleteEvent.mutate(id)
    navigate(`/events`)
  }

  //TODO: implement attend logic
  function handleAttend() {
    return
  }

  if (isLoading) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading event details: </h3>
        {String(error)}
      </div>
    )

  if (evts)
    return (
      <div className="h-[464px] px-40 py-16  flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[336px] pt-[70px] flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch text-[#1e1e1e] text-7xl font-bold font-['Inter'] leading-[86.40px]">
            {evts.title}
          </div>
          {/* TODO: Conditionally render these buttons based on if the user added this event */}
          {isAuthenticated && user?.sub ? (
            <>
              <button
                onClick={() => handleEditEvent(id)}
                className="self-center p-3 bg-[#ffc82c] rounded-lg border justify-center items-center gap-2 inline-flex"
              >
                <div className="w-[58px] text-black text-xs font-normal font-['Inter']">
                  Edit Event
                </div>
              </button>
              <button
                onClick={() => handleDeleteEvent(id)}
                className="self-center p-3 bg-[#ffc82c] rounded-lg border justify-center items-center gap-2 inline-flex"
              >
                <div className="text-black text-xs font-normal font-['Inter']">
                  Delete Event
                </div>
              </button>
            </>
          ) : (
            <></>
          )}

          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="w-[70px] h-[70px] relative rounded-full">
              <img
                className="w-[75px] h-[75px] left-0 top-0 absolute"
                src="https://via.placeholder.com/408x260"
                alt={`${evts.creatorId}`}
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="self-stretch text-[#757575] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Hosted By
              </div>
              <div className="self-stretch text-[#b3b3b3] text-[32px] font-normal font-['Inter'] leading-[38.40px]">
                Event Creator Name
              </div>
            </div>
          </div>
        </div>
        <div className="h-[650px] px-40 py-16 flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch justify-start items-start gap-16 inline-flex">
            {evts.eventImage === '' || undefined ? (
              <img
                className="grow shrink basis-0 h-[260px] rounded-lg"
                src="https://via.placeholder.com/408x260"
                alt={evts.title}
              />
            ) : (
              <img
                className="grow shrink basis-0 h-[260px] rounded-lg"
                src={evts.eventImage || 'https://via.placeholder.com/408x260'}
                alt={`${evts.title}`}
              />
            )}
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
              <div className="self-stretch h-[458px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-7 h-7 relative"></div>
                  <div className="grow shrink basis-0 h-[29px] justify-start items-start flex">
                    <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                      {`${dateToReadable(evts.date)}, `} {TimeFormat(evts.time)}
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-7 h-7 relative"></div>
                  <div className="grow shrink basis-0 h-[29px] justify-start items-start flex">
                    <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                      {evts.location}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[368px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-start py-6 inline-flex">
                    <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                      {evts.title}
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                      {evts.description}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleAttend()}
                className="self-stretch p-3 bg-[#ffc82c] rounded-lg border justify-center items-center gap-2 inline-flex"
              >
                <div className="text-neutral-100 text-base font-normal font-['Inter'] leading-none">
                  Attend
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1200px] h-[649px] p-16 flex-col justify-start items-start gap-12 inline-flex">
          <div className="justify-start items-start inline-flex">
            <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Attendees
            </div>
          </div>
          <ul>
            {pets?.map((pet) => (
              <div
                key={pet.id}
                className="self-stretch p-2 justify-start items-start gap-6 inline-flex"
              >
                <div className="p-4 bg-white rounded-lg border border-[#d9d9d9] flex-col justify-start items-center gap-4 inline-flex">
                  <Link to={`/profiles/${pet.id}`}>
                    <img
                      className="w-[120px] h-[120px] rounded-full"
                      src={`../../${pet.image}`}
                      alt={pet.petName}
                    />
                    <div className="h-[42px] flex-col justify-start items-center gap-2 flex">
                      <div className="h-[42px] flex-col justify-start items-center flex">
                        <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                          {pet.petName}
                        </div>
                        <div className="text-[#757575] text-sm font-normal font-['Inter'] leading-tight">
                          {pet.species}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
}
