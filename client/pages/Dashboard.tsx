// import LoadingSpinner from '../components/LoadingSpinner'
// import PetCard from '../components/utils/PetCard/PetCard'
// import Sidebar from '../components/utils/Sidebar/Sidebar'
// import usePetByOwnerId from '../hooks/use-pet-by-owner-id'

// export default function Dashboard() {
//   const { data, isPending, isError, error } = usePetByOwnerId(5)
//   if (isPending) return <LoadingSpinner />

//   if (isError)
//     return (
//       <div>
//         <h3>Error loading pet list: </h3>
//         {String(error)}
//       </div>
//     )

//   return (
//     <>
//       <br></br>
//       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//         My Pets
//       </h1>
//       <div className="flex gap-x-4">
//         <Sidebar />
//       </div>{' '}
//       <div className="">
//         <PetCard name={'sam'} age={0} breed={'rat'} imageUrl={'starsky.jpg'} />
//       </div>
//     </>
//   )

// Sidebar component
const Sidebar = () => {
  return (
    <div className="bg-white w-60 h-screen shadow-lg">
      <div className="flex flex-col items-center py-6 ">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-lg font-semibold">Sam Pederson</p>
        <button className="text-sm text-gray-600 mt-2">▼</button>
      </div>
      <div className="flex flex-col space-y-6 mt-10 pl-6">
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 hover:text-black"
        >
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 hover:text-black"
        >
          <i className="fas fa-paw"></i>
          <span>My Pets</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 hover:text-black"
        >
          <i className="fas fa-calendar-alt"></i>
          <span>My Schedule</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-700 hover:text-black"
        >
          <i className="fas fa-calendar"></i>
          <span>My Events</span>
        </a>
      </div>
    </div>
  )
}

// Card Component
const Card = ({ title, children, addAction }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {addAction && (
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          {addAction}
        </button>
      )}
    </div>
    {children}
  </div>
)

// PetCard component
const PetCard = ({ name, imageUrl }) => (
  <div className="flex items-center border p-4 rounded-lg space-x-4">
    <img
      src={imageUrl}
      alt={name}
      className="w-20 h-20 object-cover rounded-lg"
    />
    <div className="flex-1">
      <p className="font-semibold">{name}</p>
      <div className="flex space-x-4 mt-2">
        <button className="text-sm text-blue-500">Edit Profile</button>
        <button className="text-sm text-red-500">Delete Profile</button>
      </div>
    </div>
  </div>
)

// ScheduleCard component
const ScheduleCard = ({ title, time }) => (
  <div className="flex items-center border p-4 rounded-lg space-x-4">
    <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
    <div className="flex-1">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <button className="text-sm text-blue-500 mt-2">View details</button>
    </div>
    <p className="text-sm text-gray-500">✓ Not going</p>
  </div>
)

// Main dashboard layout
const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Card title="My Pets" addAction="Add Pet">
          <div className="space-y-4">
            <PetCard name="Gary" imageUrl="https://via.placeholder.com/150" />
            <PetCard name="Peach" imageUrl="https://via.placeholder.com/150" />
          </div>
        </Card>

        <Card title="My Schedule" addAction="See more events">
          <div className="space-y-4">
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
          </div>
        </Card>

        <Card title="My Events" addAction="Add Event">
          <div className="space-y-4">
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
            <ScheduleCard
              title="Smales Farm Sunday Market"
              time="Thu 12 Sep, 5:30 PM"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
