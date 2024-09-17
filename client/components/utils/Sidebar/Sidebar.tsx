// Sidebar component
import { useAuth0 } from '@auth0/auth0-react'
import { HashLink } from 'react-router-hash-link'

const Sidebar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div className="w-full lg:w-1/3 rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src={user?.picture || 'https://via.placeholder.com/100'} // Use optional chaining
            alt="Profile"
            className="w-16 h-16 rounded-full mb-8"
          />
          <p className="text-3xl font-semibold text-center">
            {`${user?.nickname}'s Dashboard` || 'User'}
          </p>{' '}
          {/* Use optional chaining */}
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col gap-y-6">
            <HashLink
              to="#my-pets"
              className="text-gray-950 hover:text-gray-600 ease-in-out duration-100"
            >
              <i className="fas fa-paw text-2xl pr-8"></i>
              <span>My Pets</span>
            </HashLink>
            <HashLink
              to="#my-schedule"
              className="text-gray-950 hover:text-gray-600 ease-in-out duration-100"
            >
              <i className="fas fa-calendar-alt text-2xl pr-8"></i>
              <span>My Schedule</span>
            </HashLink>
            <HashLink
              to="#my-events"
              className="text-gray-950 hover:text-gray-600 ease-in-out duration-100"
            >
              <i className="fas fa-icons text-2xl pr-8"></i>
              <span>My Events</span>
            </HashLink>
          </div>
        </div>
      </div>
    )
  )
}

export default Sidebar
