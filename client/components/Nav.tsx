import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IfAuthenticated, IfNotAuthenticated } from './utils/Authenticated.tsx'
import { Link } from 'react-router-dom'
import AccountIcon from './UserMenu.tsx'

const navigation = [
  { name: 'About', to: '/about' },
  { name: 'Pets', to: '/profiles' },
  { name: 'Events', to: '/events' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { logout, loginWithRedirect } = useAuth0()
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin', //may need to change :3
        redirect_uri: `${window.location.origin}/dashboard`,
      },
    })
  }

  const handleRegister = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup', //may need to change :3
        redirect_uri: `${window.location.origin}/user-profile`,
      },
    })
  }

  function handleClick() {
    const dropdowns = document.querySelector('.dropdown-content')
    const profileImage = document.querySelector('.dropdown-menu')
    if (dropdowns?.classList.contains('hidden')) {
      dropdowns.classList.remove('hidden')
      profileImage?.classList.remove('border-white')
      profileImage?.classList.add('border-yellow-400')
    } else {
      dropdowns?.classList.add('hidden')
      profileImage?.classList.remove('border-yellow-400')
      profileImage?.classList.add('border-white')
    }
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">pawpals</span>
            <img alt="logo" src="logos/pawpals.png" className="h-16 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <IfAuthenticated>
            <Link
              to="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Dashboard
            </Link>
          </IfAuthenticated>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <IfAuthenticated>
            <AccountIcon handleClick={handleClick} />
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleSignIn}
            >
              Log in
            </button>
            <button
              className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              onClick={handleRegister}
            >
              Sign up
            </button>
          </IfNotAuthenticated>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <IfAuthenticated>
                  <button
                    className="block -mx-3 text-left rounded-lg w-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                </IfAuthenticated>
                <IfNotAuthenticated>
                  <button
                    className="block text-left -mx-3 rounded-lg w-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleSignIn}
                  >
                    Sign in
                  </button>
                </IfNotAuthenticated>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
