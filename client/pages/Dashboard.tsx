import { useEffect, useState } from 'react'
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
  date: string
  time: string
  going: boolean
  eventImage: string
}

export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [pets, setPets] = useState<Pet[]>([]) // State to store pets
  const [events, setEvents] = useState<Event[]>([]) // State to store events

  const viewBtn = { title: 'View event', icon: 'right-to-bracket' }
  const cancelBtn = { title: 'Cancel attendance', icon: 'x' }
  const editBtn = { title: 'Edit event', icon: 'pen-to-square' }

  async function fetchPetsByOwnerId(ownerId: string) {
    try {
      const response = await fetch(`/api/v1/pets?ownerId=${ownerId}`)
      const data = await response.json()

      return data.filter((pet: Pet) => pet.ownerId === ownerId)
    } catch (error) {
      console.error('Error fetching pets:', error)
      return []
    }
  }

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
    <div className="mx-auto max-w-5xl py-24 sm:py-32 lg:py-24">
      <div className="shadow-lg rounded-2xl pt-6 bg-gradient-to-r from-yellow-400 via-[#cf789a] to-[#a85be5]">
        <div className="flex flex-col gap-10 lg:flex-row bg-white rounded-b-2xl shadow-2xl py-14 px-10 w-full">
          <Sidebar />
          {/* Pets Section */}
          <div className="w-full lg:w-2/3">
            <Card
              icon="paw"
              title="My Pets"
              id="my-pets"
              buttonPath={'/create'}
              buttonText="Add Pet"
              buttonIcon="plus"
            >
              <div className="space-y-4">
                {pets.length > 0 ? (
                  pets.map((pet) => (
                    <PetCard
                      key={pet.id}
                      id={pet.id}
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
              icon="calendar-alt"
              title="My Schedule"
              id="my-schedule"
              buttonPath={'/events'}
              buttonText="See more events"
              buttonIcon="calendar-plus"
            >
              <div className="space-y-4">
                {events.length > 0 ? (
                  events.map((event) => (
                    <ScheduleCard
                      key={event.id}
                      id={event.id}
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      eventImage={event.eventImage}
                      viewBtn={viewBtn}
                      cancelBtn={cancelBtn}
                    />
                  ))
                ) : (
                  <p>You do not have any events scheduled.</p>
                )}
              </div>
            </Card>
            {/* Events Section */}
            <Card
              icon="icons"
              title="My Events"
              id="my-events"
              buttonPath={'/events/create'}
              buttonText="Add Event"
              buttonIcon="plus"
            >
              <div className="space-y-4">
                {events.length > 0 ? (
                  events.map((event) => (
                    <ScheduleCard
                      key={event.id}
                      id={event.id}
                      date={event.date}
                      title={event.title}
                      time={event.time}
                      eventImage={event.eventImage} // Again, using any event data you have
                      viewBtn={viewBtn}
                      editBtn={editBtn}
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
