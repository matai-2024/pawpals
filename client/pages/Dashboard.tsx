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
  const [pets, setPets] = useState<Pet[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [schedule, setSchedule] = useState<Event[]>([])

  const viewBtn = { title: 'View event', icon: 'right-to-bracket' }
  const cancelBtn = { title: 'Cancel attendance', icon: 'x' }
  const editBtn = { title: 'Edit event', icon: 'pen-to-square' }

  // Fetch pets owned by the user
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

  // Fetch events created by the user
  async function getEventsByCreatorId() {
    try {
      const response = await fetch(`/api/v1/events?creatorId=${1}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching created events:', error)
      return []
    }
  }

  // Fetch events that pets are attending
  async function getEventsForAttendingPets(ownerId: string) {
    try {
      // First, fetch the user's pets
      const petsData = await fetchPetsByOwnerId(ownerId)
      const petIds = petsData.map((pet: { id: number }) => pet.id)

      if (petIds.length === 0) {
        return []
      }

      // Fetch events where these pets are attending
      const attendeeResponse = await fetch(
        `/api/v1/attendees?petIds=${petIds.join(',')}`,
      )
      const attendeeData = await attendeeResponse.json()

      const attendingEventIds = attendeeData.map(
        (attendee: { event_id: number }) => attendee.event_id,
      )

      if (attendingEventIds.length === 0) {
        return []
      }

      // Fetch details of the events these IDs refer to
      const eventsResponse = await fetch(
        `/api/v1/events?eventIds=${attendingEventIds.join(',')}`,
      )
      const eventsData = await eventsResponse.json()

      return eventsData
    } catch (error) {
      console.error('Error fetching events for attending pets:', error)
      return []
    }
  }

  // useEffect to fetch pets, created events, and attending events
  useEffect(() => {
    if (isAuthenticated && user?.sub) {
      const ownerId = user.sub

      // Fetch pets and then fetch events for attending pets
      fetchPetsByOwnerId(ownerId)
        .then((petsData) => {
          setPets(petsData)

          // Fetch events where user's pets are attending
          return getEventsForAttendingPets(ownerId)
        })
        .then((attendingEvents) => setSchedule(attendingEvents))
        .catch((err) => console.error('Error fetching schedule:', err))

      // Fetch events created by the user
      getEventsByCreatorId()
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
          <div className="w-full lg:w-2/3">
            <Card
              icon="paw"
              title="My Pets"
              id="my-pets"
              buttonPath="/create"
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

            <Card
              icon="calendar-alt"
              title="My Schedule"
              id="my-schedule"
              buttonPath="/events"
              buttonText="See more events"
              buttonIcon="calendar-plus"
            >
              <div className="space-y-4">
                {schedule.length > 0 ? (
                  schedule.map((event) => (
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

            <Card
              icon="icons"
              title="My Events"
              id="my-events"
              buttonPath="/events/create"
              buttonText="Add Event"
              buttonIcon="plus"
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
