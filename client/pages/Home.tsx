import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import HomeCards from '../components/utils/Home/HomeCards'
import HomeHeading from '../components/utils/Home/HomeHeading'
import { ImgDirection } from '../../models/enums'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Card from '../components/utils/Card/Card'

export default function Home() {
  const { loginWithRedirect } = useAuth0()

  const handleRegister = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup', //may need to change :3
        redirect_uri: `${window.location.origin}/user-profile`,
      },
    })
  }
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
            <Link
              to="#"
              onClick={handleRegister}
              className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
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
            img={'https://via.placeholder.com/277x160'}
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
            img={'https://via.placeholder.com/277x160'}
            alt={'placeholder'}
            direction={ImgDirection.Left}
          />
        </div>
        <div className="flex flex-row">
          <Card
            icon="calendar-alt"
            title="My Schedule"
            id="my-schedule"
            buttonPath={'/events'}
            buttonText="See more events"
            buttonIcon="calendar-plus"
          />
          <ScheduleCard
            id={1}
            title={'Hello!'}
            date={'2024-11-11'}
            time={'7:00'}
            image={'https://via.placeholder.com/277x160'}
          />
          <ScheduleCard
            id={1}
            title={'Hello!'}
            date={'2024-11-11'}
            time={'7:00'}
            image={'https://via.placeholder.com/277x160'}
          />
          <ScheduleCard
            id={1}
            title={'Hello!'}
            date={'2024-11-11'}
            time={'7:00'}
            image={'https://via.placeholder.com/277x160'}
          />
        </div>
      </div>
    </>
  )
}
