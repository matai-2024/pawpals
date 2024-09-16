// Sidebar component
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div className="w-1/3 rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src={user?.picture || 'https://via.placeholder.com/100'} // Use optional chaining
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="text-lg font-semibold">{user?.name || 'User'}</p>{' '}
          {/* Use optional chaining */}
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col gap-y-6">
            <Link
              to="/dashboard"
              className="text-gray-950 hover:text-gray-600 ease-in-out duration-100"
            >
              <i className="fas fa-home text-2xl pr-8"></i>
              <span>Home</span>
            </Link>
            <Link
              to="/profiles"
              className="text-gray-950 hover:text-gray-600 ease-in-out duration-100"
            >
              <i className="fas fa-paw text-2xl pr-8"></i>
              <span>My Pets</span>
            </Link>
            <Link to="/events" className="text-gray-950 hover:text-gray-600 ease-in-out duration-100">
              <i className="fas fa-calendar-alt text-2xl pr-8"></i>
              <span>My Schedule</span>
            </Link>
            <Link to="/events" className="text-gray-950 hover:text-gray-600 ease-in-out duration-100">
              <i className="fas fa-icons text-2xl pr-8"></i>
              <span>My Events</span>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}

export default Sidebar
