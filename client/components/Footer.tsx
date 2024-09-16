import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './utils/Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Footer() {
  const { logout, loginWithRedirect } = useAuth0()
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        redirect_uri: `${window.location.origin}/dashboard`,
      },
    })
  }

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 via-[#cf789a] to-[#a85be5] h-4"></div>
      <hr className="opacity-20 h-px  bg-white border-0 dark:bg-white"></hr>
      <div className="bg-white bg-opacity-10 z-50 max-w-screen-full px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 font-[Inter]">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to="/about"
              className=" text-base leading-6 text-gray-800 hover:text-gray-400 "
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/profiles"
              className="text-base leading-6  text-gray-800 hover:text-gray-400  "
            >
              Pets
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/events"
              className="text-base leading-6  text-gray-800 hover:text-gray-400  "
            >
              Events
            </Link>
          </div>
          <div className="px-5 py-2">
            <IfAuthenticated>
              <button
                className="text-base leading-6  text-gray-800 hover:text-gray-400  "
                onClick={handleSignOut}
              >
                Log out
              </button>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <button
                className="text-base leading-6  text-gray-800 hover:text-gray-400  "
                onClick={handleSignIn}
              >
                Log in
              </button>
            </IfNotAuthenticated>
          </div>
        </nav>
        <div className="text-xl flex justify-center mt-8 space-x-6">
          <Link to="#" className="  text-gray-800 hover:text-gray-400 ">
            <i className="fa-brands fa-facebook"></i>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link to="#" className="  text-gray-800 hover:text-gray-400">
            <i className="fa-brands fa-instagram"></i>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link to="#" className="  text-gray-800 hover:text-gray-400">
            <i className="fa-brands fa-twitter"></i>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link to="#" className="  text-gray-800 hover:text-gray-400">
            <i className="fa-brands fa-github"></i>
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
        <p className="mt-8 text-sm leading-6 text-center text-gray-400">
          © 2024 pawpals, Inc. All rights reserved.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-50 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </>
  )
}
