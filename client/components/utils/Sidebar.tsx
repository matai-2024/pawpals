// Sidebar Component
export default function Sidebar() {
  return (
    <div className="w-1/4 bg-white p-6 border-r">
      <div className="text-center mb-8">
        <img
          src="profile-pic-url"
          alt="Profile Picture"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <p className="text-lg font-semibold">Sam Pederson</p>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <span className="mr-4">🏠</span>Home
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <span className="mr-4">🐾</span>My Pets
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <span className="mr-4">📅</span>My Events
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
