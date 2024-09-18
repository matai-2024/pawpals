import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import HomeCards from '../components/utils/Home/HomeCards'
import HomeHeading from '../components/utils/Home/HomeHeading'
import { ImgDirection } from '../../models/enums'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/utils/Authenticated'
import dateToReadable, {
  DescriptionFormat,
  TimeFormat,
} from '../components/utils/Presentation'
import useFetchEvents from '../hooks/eventHooks/use-fetch-events'
import { Event } from '../../models/events'

export default function Home() {
  const { loginWithRedirect } = useAuth0()
  const { data: events } = useFetchEvents()

  console.log(events)
  if (events)
    return (
      <>
        <div className="mx-auto text-center inline-col max-w-5xl py-32 sm:py-48 lg:py-24">
          <div className="text-center pb-24">
            <h1
              data-testid="test title"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Find more friends for your best friend
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connecting local pet owners, making it easy to find playmates and
              organise pet-friendly events. Build a community for your pets so
              they live their best lives!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <IfAuthenticated>
                <Link
                  to="/create"
                  className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button
                  onClick={() => {
                    return loginWithRedirect({
                      authorizationParams: {
                        screen_hint: 'signin', //may need to change :3
                        redirect_uri: `${window.location.origin}/dashboard`,
                      },
                    })
                  }}
                  className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </button>
              </IfNotAuthenticated>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-5xl pb-32 sm:pt-44 lg:pt-20">
            <div className="flex flex-col">
              <i className="fa-solid fa-pen text-2xl pr-4"></i>
              <HomeCards
                title="Sign Up Yourself"
                body="Click get started to make your (people) account"
              />
            </div>
            <div className="flex flex-col">
              <i className="fa-solid fa-paw text-2xl pr-4"></i>
              <HomeCards
                title="Sign Up Pets "
                body="Then make an account for your little pal(s)!"
              />
            </div>
            <div className="flex flex-col">
              <i className="fa-solid fa-calendar-days text-2xl pr-4"></i>
              <HomeCards
                title="Attend Events"
                body="Browse events setup by the community, meet local pet owners"
              />
            </div>
          </div>
          <div className="flex-col max-w-5xl">
            <HomeHeading
              heading={'pawpals'}
              subheading={'About the site'}
              body={`Discover the ultimate destination for pet lovers! Sign in to pawpals to connect with a vibrant community of fellow pet enthusiasts, find exciting local and virtual events, and keep your furry friends entertained and engaged. 
                Whether you're looking for pet-friendly activities, training workshops, or adoption fairs, we’ve got it all in one place. Join us today and make every day an adventure for you and your pets!`}
              img={'public/homeCats.webp'}
              alt={'placeholder'}
              direction={ImgDirection.Right}
            />
          </div>
          <div className="flex-col max-w-5xl py-32 sm:py-48 lg:py-24 ">
            <HomeHeading
              heading={'How do pets tie into it?'}
              subheading={'Create a profile for your pets!'}
              body={
                'Give your pets the spotlight they deserve! Create a profile for each of your furry, feathered, or scaly friends on pawpals and showcase their unique personalities, favorite activities, and adorable photos. With pet profiles, you can easily track their traits, connect with other pet parents, and discover events tailored to their interests. Start building their profiles today and let the world see how special your pets are!'
              }
              img={'public/dawgs.webp'}
              alt={'placeholder'}
              direction={ImgDirection.Left}
            />
          </div>
          <IfAuthenticated>
            <Link
              to="/create"
              className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button
              onClick={() => {
                return loginWithRedirect({
                  authorizationParams: {
                    screen_hint: 'signin', //may need to change :3
                    redirect_uri: `${window.location.origin}/dashboard`,
                  },
                })
              }}
              className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </button>
          </IfNotAuthenticated>
          <div className="flex flex-col items-start pt-24 gap-6">
            <h2 className="text-[#1e1e1e] text-2xl font-semibold leading-[28.80px]">
              Featured Events:
            </h2>
            <h3 className="text-left self-stretch text-[#757575] text-xl font-normal leading-normal">
              Check these out!
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap gap-6">
              {events.slice(0, 3).map((event: Event) => (
                <div
                  key={`event-${event.id}`}
                  className="w-[calc(100%/3-24px)]"
                >
                  <Link to={`/events/${event.id}`}>
                    <div className=" h-96 p-4 py-6 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100 rounded-lg flex-col gap-6 inline-flex ease-in-out duration-200">
                      <div className="rounded-lg overflow-hidden h-40">
                        <img
                          className="min-h-44 object-cover"
                          src={`public/events/${event.eventImage}`}
                          alt={''}
                        />
                      </div>
                      <div className="h-44 flex flex-col text-left gap-2 ">
                        <p className="text-sm text-gray-800 font-semibold">
                          {`${dateToReadable(event.date)},`}{' '}
                          {TimeFormat(event.time)}
                        </p>

                        <div>
                          <h3 className="text-xl text-gray-950 font-semibold">
                            {event.title}
                          </h3>
                        </div>
                        <div className="text-gray-600 text-sm font-normal leading-tight">
                          <p className="line-clamp-3">
                            {DescriptionFormat(event.description)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
}
