// Sidebar component
const Sidebar = () => {
  return (
    <div className="bg-white w-60 h-screen shadow-lg">
      <div className="flex flex-col items-center py-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-lg font-semibold">Your name</p>
      </div>
      <div className="flex flex-col space-y-6 mt-10 pl-6">
        <a
          href="/"
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
}

export default Sidebar
