// import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { EventData } from '../../models/events'
import { Pet } from '../../models/forms'
import dateToReadable, {
  TimeFormat,
} from '../components/utils/EventPresentation'
import { Events } from '../components/utils/tempEvents'
import usePets from '../hooks/use-pets'
import LoadingSpinner from '../components/LoadingSpinner'

interface Props {
  event: EventData
  pet: Pet
}

export default function EventDetails(props: Props) {
  // const user = useAuth0()
  const { event, pet } = props
  const { data: pets, isLoading, isError, error } = usePets()

  if (isLoading) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading event details: </h3>
        {String(error)}
      </div>
    )

  return (
    <div className="h-[464px] px-40 py-16  flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[336px] pt-[70px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-[#1e1e1e] text-7xl font-bold font-['Inter'] leading-[86.40px]">
          {Events[0].title}
        </div>
        {/* TODO: Conditionally render these buttons based on if the user added this event */}
        <div className="w-[58px] text-black text-xs font-normal font-['Inter']">
          Edit Event
        </div>
        <div className="text-black text-xs font-normal font-['Inter']">
          Delete Event
        </div>

        <div className="self-stretch justify-start items-start gap-3 inline-flex">
          <div className="w-[70px] h-[70px] relative rounded-full">
            <img
              className="w-[75px] h-[75px] left-0 top-0 absolute"
              src="https://via.placeholder.com/408x260"
              alt={`${Events[0].title}`}
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
          <img
            className="grow shrink basis-0 h-[260px] rounded-lg"
            src="https://via.placeholder.com/408x260"
            alt={`${Events[0].title}`}
          />
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch h-[458px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-7 h-7 relative"></div>
                <div className="grow shrink basis-0 h-[29px] justify-start items-start flex">
                  <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    {`${dateToReadable(Events[0].date)}, `}{' '}
                    {TimeFormat(Events[0].time)}
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-7 h-7 relative"></div>
                <div className="grow shrink basis-0 h-[29px] justify-start items-start flex">
                  <div className="text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                    {Events[0].location}
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[368px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="text-[#1e1e1e] text-base font-semibold font-['Inter'] leading-snug">
                    {Events[0].description}
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 text-[#757575] text-base font-normal font-['Inter'] leading-snug">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    auctor, diam porta netus tempus habitasse aptent donec
                    condimentum vulputate, turpis purus magna cursus elementum
                    iaculis facilisis. <br />
                    <br />
                    Hendrerit cursus felis habitant suscipit tempus tellus proin
                    malesuada, netus duis quam fringilla molestie sed augue
                    velit ante, cum in ultrices rhoncus condimentum neque
                    tincidunt. <br />
                    <br />
                    Netus semper nibh faucibus curabitur imperdiet magna sapien
                    libero, torquent gravida ante dignissim magnis tristique
                    aliquet, potenti leo tincidunt eleifend malesuada fames
                    congue tortor, montes a primis at suspendisse nisl.
                  </div>
                </div>
              </div>
            </div>
            <button className="self-stretch p-3 bg-[#ffc82c] rounded-lg border justify-center items-center gap-2 inline-flex">
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
        <div className="self-stretch justify-start items-start gap-6 inline-flex">
          <ul>
            {pets?.map((pet) => (
              <div
                key={pet.id}
                className="p-4 bg-white rounded-lg border border-[#d9d9d9] flex-col justify-start items-center gap-4 inline-flex"
              >
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
