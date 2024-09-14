import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Card from '../components/utils/Card/Card'
import PetCard from '../components/utils/PetCard/PetCard'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Sidebar from '../components/utils/Sidebar/Sidebar'
import { fetchPetsByOwnerId } from '../apis/apiClientPets' // Your API call to fetch pets
import { getEventById } from '../apis/apiClientEvents'

// Dashboard Component
export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [pets, setPets] = useState([]) // State to store fetched pets
  const [events, setEvents] = useState([]) // State to store fetched events

  // Fetch pets and events when the user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      // Fetch pets for the authenticated user
      fetchPetsByOwnerId(user.sub) // user.sub is the unique user identifier
        .then((petsData) => setPets(petsData))
        .catch((err) => console.error('Error fetching pets:', err))

      // Fetch events for the authenticated user
      getEventById(user.sub, user.sub) // user.sub is passed to fetch user-specific events
        .then((eventsData) => setEvents(eventsData))
        .catch((err) => console.error('Error fetching events:', err))
    }
  }, [isAuthenticated, user])

  // If the app is still loading user data, show a loading indicator
  if (isLoading) {
    return <div>Loading...</div>
  }

  // If the user is not authenticated, show a message
  if (!isAuthenticated) {
    return (
      <div>
        <h2>You need to log in to see your dashboard.</h2>
      </div>
    )
  }

  return (
    <div className="mx-auto text-center max-w-5xl py-32 sm:py-48 lg:py-24">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          {/* Pets Section */}
          <Card title="My Pets" addAction="Add Pet">
            <div className="space-y-4">
              {pets.length > 0 ? (
                pets.map((pet) => (
                  <PetCard
                    key={pet.id}
                    petname={pet.petName}
                    imageUrl={pet.imageUrl}
                  />
                ))
              ) : (
                <p>You don't have any pets yet.</p>
              )}
            </div>
          </Card>

          {/* Schedule Section */}
          <Card title="My Schedule" addAction="See more events">
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <ScheduleCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    going={event.going} // You can pass this property if it's in your data
                  />
                ))
              ) : (
                <p>You don't have any events scheduled.</p>
              )}
            </div>
          </Card>

          {/* Events Section */}
          <Card title="My Events" addAction="Add Event">
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <ScheduleCard
                    key={event.id}
                    title={event.title}
                    time={event.time}
                    going={event.going} // Again, using any event data you have
                  />
                ))
              ) : (
                <p>You don't have any events yet.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard