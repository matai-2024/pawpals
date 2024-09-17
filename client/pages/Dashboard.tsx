import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Card from '../components/utils/Card/Card'
import PetCard from '../components/utils/PetCard/PetCard'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Sidebar from '../components/utils/Sidebar/Sidebar'

interface Pet {
  image: string
  id: number
  petName: string
  ownerId: string
}

interface Event {
  creatorId: number
  id: number
  title: string
  time: string
  going: boolean
  eventImage: string
}

export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()
  const [pets, setPets] = useState<Pet[]>([]) // State to store pets
  const [events, setEvents] = useState<Event[]>([]) // State to store events
  const [mySchedule, setMySchedule] = useState<Event[]>([]) // State for events user is attending

  async function fetchPetsByOwnerId(ownerId: string) {
    try {
      const response = await fetch(`/api/v1/pets?ownerId=${ownerId}`)
      const data = await response.json()

      const filteredPets = data.filter((pet: Pet) => pet.ownerId === ownerId)

      return filteredPets
    } catch (error) {
      console.error('Error fetching pets:', error)
      return []
    }
  }

  // Fetch events created by the authenticated user
  async function getEventsByCreatorId() {
    try {
      const response = await fetch(`/api/v1/events`)
      const data = await response.json()

      return data.filter((event: Event) => event.creatorId === 1)
    } catch (error) {
      console.error('Error fetching events:', error)
      return []
    }
  }

  async function getEventsForAttendingPets(accountId: string) {
    try {
      const attendeeResponse = await fetch(
        `/api/v1/attendees?accountId=${accountId}`,
      )
      const attendeeData = await attendeeResponse.json()

      const attendingEventIds = attendeeData.map(
        (attendee: { event_id: number }) => attendee.event_id,
      )

      if (attendingEventIds.length === 0) {
        return [] // No attending events
      }

      // Fetch events that match the event IDs
      const eventsResponse = await fetch(
        `/api/v1/events?eventIds=${attendingEventIds.join(',')}`,
      )
      const eventsData = await eventsResponse.json()

      return eventsData
    } catch (error) {
      console.error('Error fetching schedule events for pets:', error)
      return []
    }
  }

  // UseEffect to fetch pets, created events, and attending events
  useEffect(() => {
    if (isAuthenticated && user?.sub) {
      const ownerId = user.sub

      fetchPetsByOwnerId(ownerId)
        .then((petsData) => {
          setPets(petsData)

          // Fetch attending events (where user's pets are attendees)
          return getEventsForAttendingPets(ownerId) // Pass ownerId (accountId) here
        })
        .then((attendingEvents) => setMySchedule(attendingEvents))
        .catch((err) => console.error('Error fetching schedule:', err))

      getEventsByCreatorId() // For fetching user's created events
        .then((createdEvents) => setEvents(createdEvents))
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

          {/* My Schedule Section (Events user is attending) */}
          <Card
            title="My Schedule"
            addAction={() => navigate('/events')}
            buttonText="See more events"
          >
            <div className="space-y-4">
              {mySchedule.length > 0 ? (
                mySchedule.map((event) => (
                  <ScheduleCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    going={true}
                    eventImage={event.eventImage}
                  />
                ))
              ) : (
                <p>You do not have any events scheduled.</p>
              )}
            </div>
          </Card>

          {/* My Events Section (Events user created) */}
          <Card
            title="My Events"
            addAction={() => navigate(`/events/create`)}
            buttonText="Add Event"
          >
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <ScheduleCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    going={true}
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

// interface Pet {
//   image: string
//   id: number
//   petName: string
//   ownerId: string
// }

// interface Event {
//   creatorId: number
//   id: number
//   title: string
//   time: string
//   going: boolean
//   eventImage: string
// }

// export function Dashboard() {
//   const { user, isAuthenticated, isLoading } = useAuth0()
//   const navigate = useNavigate()
//   console.log(user)
//   const [pets, setPets] = useState<Pet[]>([]) // State to store pets
//   const [events, setEvents] = useState<Event[]>([]) // State to store events

//   async function fetchPetsByOwnerId(ownerId: string) {
//     try {
//       const response = await fetch(`/api/v1/pets?ownerId=${ownerId}`)
//       const data = await response.json()

//       const filteredPets = data.filter((pet: Pet) => pet.ownerId === ownerId)

//       return filteredPets
//     } catch (error) {
//       console.error('Error fetching pets:', error)
//       return []
//     }
//   }

//   async function getEventsByCreatorId() {
//     try {
//       const response = await fetch(`/api/v1/events`)
//       const data = await response.json()

//       return data.filter((event: Event) => event.creatorId === 1)
//     } catch (error) {
//       console.error('Error fetching events:', error)
//       return []
//     }
//   }

//   useEffect(() => {
//     if (isAuthenticated && user?.sub) {
//       // Fetch pets for the authenticated user
//       fetchPetsByOwnerId(user.sub)
//         .then((petsData) => {
//           setPets(petsData)

//           // Fetch and filter events with creatorId = 1
//           return getEventsByCreatorId()
//         })
//         .then((filteredEvents) => setEvents(filteredEvents))
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
//                     going={true}
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
//             addAction={() => navigate(`/events/create`)}
//             buttonText="Add Event"
//           >
//             <div className="space-y-4">
//               {events.length > 0 ? (
//                 events.map((event) => (
//                   <ScheduleCard
//                     key={event.id}
//                     title={event.title}
//                     time={event.time}
//                     going={true}
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
