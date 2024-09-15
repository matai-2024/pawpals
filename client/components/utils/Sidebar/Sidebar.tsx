// Sidebar component
import { useAuth0 } from '@auth0/auth0-react'

const Sidebar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div className="bg-white w-60 h-screen shadow-lg bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex flex-col items-center py-6">
          <img
            src={user?.picture || 'https://via.placeholder.com/100'} // Use optional chaining
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="text-lg font-semibold">{user?.name || 'User'}</p>{' '}
          {/* Use optional chaining */}
        </div>
        <div className="flex flex-col space-y-6 mt-10 pl-6">
          <a
            href="/dashboard"
            className="flex items-center space-x-3 text-gray-700 hover:text-black"
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a
            href="/profiles"
            className="flex items-center space-x-3 text-gray-700 hover:text-black"
          >
            <i className="fas fa-paw"></i>
            <span>My Pets</span>
          </a>
          <a
            href="/events"
            className="flex items-center space-x-3 text-gray-700 hover:text-black"
          >
            <i className="fas fa-calendar-alt"></i>
            <span>My Schedule</span>
          </a>
          <a
            href="/events"
            className="flex items-center space-x-3 text-gray-700 hover:text-black"
          >
            <i className="fas fa-calendar"></i>
            <span>My Events</span>
          </a>
        </div>
      </div>
    )
  )
}

export default Sidebar
