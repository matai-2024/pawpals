import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Card from '../components/utils/Card/Card'
import PetCard from '../components/utils/PetCard/PetCard'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Sidebar from '../components/utils/Sidebar/Sidebar'
import { fetchPetsByOwnerId } from '../apis/apiClientPets'
import { getEventsByCreatorId } from '../apis/apiClientEvents'

// Hardcoding the type for pets and events
interface Pet {
  image: string
  id: number
  petName: string
}

interface Event {
  id: number
  title: string
  time: string
  going: boolean
  image: string
}

// Dashboard Component
export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

  const [pets, setPets] = useState<Pet[]>([]) // State to store pets
  const [events, setEvents] = useState<Event[]>([]) // State to store events
  console.log(user)
  // UseEffect to set hardcoded data
  useEffect(() => {
    if (isAuthenticated && user) {
      // Fetch pets for the authenticated user
      fetchPetsByOwnerId(4) // user.sub is the unique user identifier
        .then((petsData) => setPets(petsData))
        .catch((err) => console.error('Error fetching pets:', err))

      // Fetch events for the authenticated user
      getEventsByCreatorId('auth0|66e4c67a85ce6c31049fb8a6') // Assuming you have a function to get all events by creator ID
        .then((eventsData) => setEvents(eventsData))
        .catch((err) => console.error('Error fetching events:', err))
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
                    image={event.image}
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
                    image={event.image} // Again, using any event data you have
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
