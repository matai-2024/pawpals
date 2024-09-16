import { useEffect, useState } from 'react'
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
}

interface Event {
  id: number
  title: string
  date: string
  time: string
  going: boolean
  image: string
}

// Dashboard Component
export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  const [pets, setPets] = useState<Pet[]>([]) // State to store pets
  const [events, setEvents] = useState<Event[]>([]) // State to store events

  // Hardcoded data for Pets and events
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hardcodedPets: Pet[] = [
    { id: 1, petName: 'Pixel', image: 'pets/pixel.webp' },
    { id: 2, petName: 'Miso', image: 'pets/miso.webp' },
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hardcodedEvents: Event[] = [
    {
      id: 1,
      title: 'Food Truck Night in Howick',
      date: 'Mon 16 Sep',
      time: '5:00 PM',
      image:
        'https://eastaucklandtourism.co.nz/wp-content/uploads/2024/08/Food-Truck.jpg',
      going: true,
    },
  ]

  const viewBtn = { title: 'View event', icon: 'right-to-bracket' }
  const cancelBtn = { title: 'Cancel attendance', icon: 'x' }
  const editBtn = { title: 'Edit event', icon: 'pen-to-square' }

  // UseEffect to set hardcoded data
  useEffect(() => {
    if (isAuthenticated && user) {
      setPets(hardcodedPets)

      // Fetch pets for the authenticated user
      //  fetchPetsByOwnerId(4) // user.sub is the unique user identifier
      //  .then((petsData) => setPets(petsData))
      //  .catch((err) => console.error('Error fetching pets:', err))

      setEvents(hardcodedEvents)
      // Fetch events for the authenticated user
      //  getEventsByCreatorId('auth0|66e4c67a85ce6c31049fb8a6') // Assuming you have a function to get all events by creator ID
      //  .then((eventsData) => setEvents(eventsData))
      //  .catch((err) => console.error('Error fetching events:', err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="mx-auto max-w-5xl pt-24 sm:pt-32 lg:pt-24">
      {/* <div className="shadow-2xl rounded-4xl p-2 bg-gradient-to-r from-yellow-400 via-[#cf789a] to-[#a85be5]"> */}
        <div className="flex flex-col gap-8 lg:flex-row bg-white rounded-3xl shadow-2xl py-14 px-8 w-full">
          <Sidebar />
          {/* Pets Section */}
          <div className="w-full lg:w-2/3">
            <Card
              icon="paw"
              title="My Pets"
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
              title="My Schedule"
              buttonPath={'/events'}
              buttonText="See more events"
              buttonIcon="calendar-plus"
              icon="calendar-alt"
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
                      going={event.going}
                      image={event.image}
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
              title="My Events"
              buttonPath={'/events/create'}
              buttonText="Add Event"
              buttonIcon="plus"
              icon="icons"
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
                      going={event.going}
                      image={event.image} // Again, using any event data you have
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
      {/* </div> */}
    </div>
  )
}

export default Dashboard
