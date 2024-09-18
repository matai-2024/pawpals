import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import HomeCards from '../components/utils/Home/HomeCards'
import HomeHeading from '../components/utils/Home/HomeHeading'
import { ImgDirection } from '../../models/enums'
import Card from '../components/utils/Card/Card'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/utils/Authenticated'
import dateToReadable, {
  DescriptionFormat,
  TimeFormat,
} from '../components/utils/Presentation'

export default function Home() {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <div className="mx-auto text-center inline-col max-w-5xl py-32 sm:py-48 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
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
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        <div className="flex max-w-5xl pt-14 sm:pt-44 lg:pt-20">
          <HomeCards
            title="Sign Up"
            body="Click get started to make your (people) account"
          />
          <HomeCards
            title="Sign Up "
            body="Then make an account for your little pal(s)!"
          />
          <HomeCards
            title="Attend Events"
            body="Browse events setup by the community to meet local pet owners"
          />
        </div>
        <div className="flex-col max-w-5xl pt-16 sm:pt-48 lg:pt-24 ">
          <HomeHeading
            heading={'pawpals'}
            subheading={'Brief description'}
            body={`Discover the ultimate destination for pet lovers! Sign in to pawpals to connect with a vibrant community of fellow pet enthusiasts, find exciting local and virtual events, and keep your furry friends entertained and engaged. Whether you're looking for pet-friendly activities, training workshops, or adoption fairs, we’ve got it all in one place. Join us today and make every day an adventure for you and your pets!`}
            img={'public/homepagePaw.webp'}
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
        <div className="flex flex-col">
          <Card
            icon="calendar-alt"
            title="Featured Events:"
            id="FEvents"
            buttonPath={'/events'}
            buttonText="See more events"
            buttonIcon="calendar-plus"
            // eslint-disable-next-line react/no-children-prop
            children={
              <div className="flex flex-row ">
                <div className=" px-2">
                  <Link to={`/events/6`} key={`event-6`}>
                    <div className="col-span-1 h-96 p-4 py-6 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100 rounded-lg flex-col gap-6 inline-flex ease-in-out duration-200">
                      <div className="rounded-lg overflow-hidden h-40">
                        <img
                          className="min-h-44 object-cover"
                          src={'public/events/event-6.webp'}
                          alt={''}
                        />
                      </div>
                      <div className="h-44 flex flex-col text-left gap-2 ">
                        <p className="text-sm text-gray-800 font-semibold">
                          {`${dateToReadable('2024-11-05')},`}{' '}
                          {TimeFormat('11:00')}
                        </p>

                        <div>
                          <h3 className="text-xl text-gray-950 font-semibold">
                            {'Birdwatching & Beaks Picnic'}
                          </h3>
                        </div>
                        <div className="text-gray-600 text-sm font-normal leading-tight">
                          <p className="line-clamp-3">
                            {DescriptionFormat(
                              '🦜🌳 Enjoy a day of birdwatching with fellow avian enthusiasts! Bring your binoculars, a picnic lunch, and learn about local bird species while your feathered friends enjoy a treat-filled picnic.',
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="px-2">
                  <Link to={`/events/${5}`} key={`event-5`}>
                    <div className="col-span-1 h-96 p-4 py-6 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100 rounded-lg flex-col gap-6 inline-flex ease-in-out duration-200">
                      <div className="rounded-lg overflow-hidden h-40">
                        <img
                          className="min-h-44 object-cover"
                          src={'public/events/event-5.webp'}
                          alt={''}
                        />
                      </div>
                      <div className="h-44 flex-col gap-2 text-left flex">
                        <p className="text-sm text-gray-800 font-semibold">
                          {`${dateToReadable('2024-10-22')},`}{' '}
                          {TimeFormat('14:00')}
                        </p>

                        <div>
                          <h3 className="text-xl text-gray-950 font-semibold">
                            {'Pet Costume Parade'}
                          </h3>
                        </div>
                        <div className="text-gray-600 text-sm font-normal leading-tight">
                          <p className="line-clamp-3">
                            {DescriptionFormat(
                              '🎃🐾 Dress up your pets and join us for a spooktacular Pet Costume Parade! Prizes for the best costumes, pet-friendly treats, and plenty of fun for pets and their humans. Don’t miss this Halloween-themed event!',
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="px-2">
                  <Link to={`/events/${1}`} key={`event-1`}>
                    <div className="col-span-1 h-96 p-4 py-6 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100 rounded-lg flex-col gap-6 inline-flex ease-in-out duration-200">
                      <div className="rounded-lg overflow-hidden h-40">
                        <img
                          className="min-h-44 object-cover"
                          src={'public/events/event-1.webp'}
                          alt={''}
                        />
                      </div>
                      <div className="h-44 flex-col gap-2 text-left flex">
                        <p className="text-sm text-gray-800 font-semibold">
                          {`${dateToReadable('2024-10-03')},`}{' '}
                          {TimeFormat('17:00')}
                        </p>

                        <div>
                          <h3 className="text-xl text-gray-950 font-semibold">
                            {'Food Truck Night in Howick'}
                          </h3>
                        </div>
                        <div className="text-gray-600 text-sm font-normal leading-tight">
                          <p className="line-clamp-3">
                            {DescriptionFormat(
                              '🍔🌮 Experience the Best of Street Food at Howick’s Ultimate Food Truck Night! 🚚🎉 Join us in Howick for an exciting Food Truck Night that promises a feast for all your senses! Get ready to dive into a world of flavors as the best food trucks in town come together to serve up mouthwatering dishes that will leave you craving more.',
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  )
}
