import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import HomeCards from '../components/utils/Home/HomeCards'
import Heading from '../components/utils/Home/HomeHeading'
import HomeHeading from '../components/utils/Home/HomeHeading'

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
      <div className="mx-auto text-center max-w-5xl py-32 sm:py-48 lg:py-24">
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <Link to="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div> */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find more friends for your best friend
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connecting local pet owners, making it easy to find playmates and
            organise pet-friendly events. Build a community for your pets so
            they live th eir best lives!
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
        <div className="mx-auto text-center max-w-5xl pt-32 sm:pt-48 lg:pt-24">
          <HomeCards title="Title" body="yap" />
          <HomeCards title="Title" body="yap" />
          <HomeCards title="Title" body="yap" />
        </div>
      </div>
      <div className="flex-col">
        <HomeHeading
          heading={'I want to be right'}
          subheading={'SUBHEADING'}
          body={'YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'}
          img={'public/pets/obi.webp'}
          direction={'right'}
        />
        <HomeHeading
          heading={'I want to be left'}
          subheading={'SUBHEADING'}
          body={'YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'}
          img={'public/pets/bubbles.webp'}
          direction={'left'}
        />
      </div>
    </>
  )
}
