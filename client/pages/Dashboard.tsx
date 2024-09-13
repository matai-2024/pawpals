import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Card from '../components/utils/Card/Card'
import PetCard from '../components/utils/PetCard/PetCard'
import ScheduleCard from '../components/utils/ScheduleCard/ScheduleCard'
import Sidebar from '../components/utils/Sidebar/Sidebar'
import { fetchPetsByOwnerId } from '../apis/apiClientPets'

// API call to fetch user events
const fetchUserEvents = async (ownerId: string | undefined) => {
  try {
    const response = await fetch(`/api/events?userId=${ownerId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch events')
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [pets, setPets] = useState([])
  const [events, setEvents] = useState([])
  console.log(user.sub)
  useEffect(() => {
    if (isAuthenticated && user) {
      // Fetch pets for the authenticated user
      fetchPetsByOwnerId(user.sub) // user.sub is a string
        .then(setPets)
        .catch((err) => console.error('Error fetching pets:', err))
      // Fetch events for the authenticated user
      fetchUserEvents(user.sub)
        .then(setEvents)
        .catch((err) => console.error('Error fetching events:', err))
    }
  }, [isAuthenticated, user])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center border p-4 rounded-lg space-x-10 mt-100">
        <h2>You need to log in to see your dashboard.</h2>
      </div>
    )
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Pets Section */}
        <Card title="My Pets" addAction="Add Pet">
          <div className="space-y-4">
            {pets.length > 0 ? (
              pets.map((pet) => (
                <PetCard key={pet.id} name={pet.name} imageUrl={pet.imageUrl} />
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
                />
              ))
            ) : (
              <p>You don't have any events yet.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
