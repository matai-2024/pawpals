import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Card from '../components/utils/Card/Card'
import PetCard from '../components/utils/PetCard/PetCard'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Sidebar from '../components/utils/Sidebar/Sidebar'

// Hardcoding the type for pets and events
interface Pet {
  image: string
  id: number
  petName: string
  ownerId: string // Add ownerId field
}

interface Event {
  id: number
  title: string
  time: string
  going: boolean
  eventImage: string
}

// Dashboard Component
export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()
  console.log(user)
  const [pets, setPets] = useState<Pet[]>([]) // State to store pets
  const [events, setEvents] = useState<Event[]>([]) // State to store events

  // Function to fetch pets by owner ID
  async function fetchPetsByOwnerId(ownerId: string) {
    try {
      const response = await fetch(`/api/v1/pets?ownerId=${ownerId}`)
      const data = await response.json()

      // Filter pets by ownerId if backend does not handle it
      const filteredPets = data.filter((pet: Pet) => pet.ownerId === ownerId)

      return filteredPets
    } catch (error) {
      console.error('Error fetching pets:', error)
      return []
    }
  }

  async function getEventsByCreatorId() {
    try {
      // Fetch all events from the API
      const response = await fetch(`/api/v1/events`)
      const data = await response.json()

      // Return only the events where creatorId is 1
      return data.filter((event: Event) => event.creatorId === 1)
    } catch (error) {
      console.error('Error fetching events:', error)
      return []
    }
  }
  // UseEffect to fetch pets and events for the authenticated user
  useEffect(() => {
    if (isAuthenticated && user?.sub) {
      // Fetch pets for the authenticated user
      fetchPetsByOwnerId(user.sub)
        .then((petsData) => {
          setPets(petsData)

          // Fetch and filter events with creatorId = 1
          return getEventsByCreatorId()
        })
        .then((filteredEvents) => setEvents(filteredEvents))
        .catch((err) => console.error('Error fetching events:', err))
    }
  }, [isAuthenticated, user])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold">
          You need to log in to see your dashboard.
        </h2>
      </div>
    )
  }

  return (
    <div className="mx-auto text-center max-w-5xl py-32 sm:py-48 lg:py-24">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          {/* Pets Section */}
          <Card
            title="My Pets"
            addAction={() => navigate('/create')}
            buttonText="Add Pet"
          >
            <div className="space-y-4">
              {pets.length > 0 ? (
                pets.map((pet) => (
                  <PetCard
                    key={pet.id}
                    petName={pet.petName}
                    image={pet.image}
                  />
                ))
              ) : (
                <p>You do not have any pets yet.</p>
              )}
            </div>
          </Card>

          {/* Schedule Section */}
          <Card
            title="My Schedule"
            addAction={() => navigate('/events')}
            buttonText="See more events"
          >
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <ScheduleCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    going={event.going}
                    eventImage={event.eventImage}
                  />
                ))
              ) : (
                <p>You do not have any events scheduled.</p>
              )}
            </div>
          </Card>

          {/* Events Section */}
          <Card
            title="My Events"
            addAction={() => navigate(`/edit-events/`)}
            buttonText="Add Event"
          >
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <ScheduleCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    going={event.going}
                    eventImage={event.eventImage}
                  />
                ))
              ) : (
                <p>You do not have any events yet.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'
// import Card from '../components/utils/Card/Card'
// import PetCard from '../components/utils/PetCard/PetCard'
// import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
// import Sidebar from '../components/utils/Sidebar/Sidebar'

// // Hardcoding the type for pets and events
// interface Pet {
//   image: string
//   id: number
//   petName: string
//   ownerId: string
// }

// interface Event {
//   id: number
//   title: string
//   time: string
//   going: boolean
//   eventImage: string
//   creatorId: string
// }

// // Dashboard Component
// export function Dashboard() {
//   const { user, isAuthenticated, isLoading } = useAuth0()
//   const navigate = useNavigate()
//   console.log(user)
//   const [pets, setPets] = useState<Pet[]>([]) // State to store pets
//   const [events, setEvents] = useState<Event[]>([]) // State to store events

//   // Function to fetch pets by owner ID
//   async function fetchPetsByOwnerId(ownerId: string) {
//     try {
//       const response = await fetch(`/api/v1/pets?ownerId=${ownerId}`)
//       const data = await response.json()

//       return data
//     } catch (error) {
//       console.error('Error fetching pets:', error)
//       return []
//     }
//   }

//   // Function to fetch events with creatorId hardcoded to 1
//   async function getEventsByCreatorId() {
//     try {
//       // Fetch events where creatorId is hardcoded to 1
//       const response = await fetch(`/api/v1/events?creatorId=1`)

//       const data = await response.json()

//       return data
//     } catch (error) {
//       console.error('Error fetching events:', error)
//       return []
//     }
//   }

//   // UseEffect to fetch pets and events for the authenticated user
//   useEffect(() => {
//     if (isAuthenticated && user?.sub) {
//       // Fetch pets for the authenticated user
//       fetchPetsByOwnerId(user.sub)
//         .then((petsData) => {
//           setPets(petsData)

//           // Fetch events with hardcoded creatorId = 1
//           return getEventsByCreatorId()
//         })
//         .then((eventsData) => setEvents(eventsData))
//         .catch((err) => console.error('Error fetching events:', err))
//     }
//   }, [isAuthenticated, user])

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <h2 className="text-xl font-semibold">
//           You need to log in to see your dashboard.
//         </h2>
//       </div>
//     )
//   }

//   return (
//     <div className="mx-auto text-center max-w-5xl py-32 sm:py-48 lg:py-24">
//       <div className="flex">
//         <Sidebar />

//         <div className="flex-1 p-8">
//           {/* Pets Section */}
//           <Card
//             title="My Pets"
//             addAction={() => navigate('/create')}
//             buttonText="Add Pet"
//           >
//             <div className="space-y-4">
//               {pets.length > 0 ? (
//                 pets.map((pet) => (
//                   <PetCard
//                     key={pet.id}
//                     petName={pet.petName}
//                     image={pet.image}
//                   />
//                 ))
//               ) : (
//                 <p>You do not have any pets yet.</p>
//               )}
//             </div>
//           </Card>

//           {/* Schedule Section */}
//           <Card
//             title="My Schedule"
//             addAction={() => navigate('/events')}
//             buttonText="See more events"
//           >
//             <div className="space-y-4">
//               {events.length > 0 ? (
//                 events.map((event) => (
//                   <ScheduleCard
//                     key={event.id}
//                     title={event.title}
//                     time={event.time}
//                     going={event.going}
//                     eventImage={event.eventImage}
//                   />
//                 ))
//               ) : (
//                 <p>You do not have any events scheduled.</p>
//               )}
//             </div>
//           </Card>

//           {/* Events Section */}
//           <Card
//             title="My Events"
//             addAction={() => navigate(`/edit-events/`)}
//             buttonText="Add Event"
//           >
//             <div className="space-y-4">
//               {events.length > 0 ? (
//                 events.map((event) => (
//                   <ScheduleCard
//                     key={event.id}
//                     title={event.title}
//                     time={event.time}
//                     going={event.going}
//                     eventImage={event.eventImage}
//                   />
//                 ))
//               ) : (
//                 <p>You do not have any events yet.</p>
//               )}
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard
