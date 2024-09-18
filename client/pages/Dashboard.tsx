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

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [pets, setPets] = useState<Pet[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [mySchedule, setMySchedule] = useState<Event[]>([])

  const viewBtn = { title: 'View event', icon: 'right-to-bracket' }
  const cancelBtn = { title: 'Cancel attendance', icon: 'x' }
  const editBtn = { title: 'Edit event', icon: 'pen-to-square' }

  async function fetchPetsByOwnerId(ownerId: string) {
    const response = await fetch(`/api/v1/pets?ownerId=${ownerId}`)
    const data = await response.json()

    return data.filter((pet: Pet) => pet.ownerId === ownerId)
  }

  async function getEventsByCreatorId() {
    const response = await fetch(`/api/v1/events`)
    const data = await response.json()

    return data.filter((event: Event) => event.creatorId === 1)
  }

  async function getEventsForAttendingPets(accountId: string) {
    const attendeeResponse = await fetch(`/api/v1/attendees/${accountId}`)

    const eventsData = await attendeeResponse.json()
    return eventsData
  }

  useEffect(() => {
    if (isAuthenticated && user?.sub) {
      const ownerId = user.sub

      const fetchData = async () => {
        const petsData = await fetchPetsByOwnerId(ownerId)
        setPets(petsData)

        const attendingEvents = await getEventsForAttendingPets(ownerId)

        const createdEvents = await getEventsByCreatorId()

        setMySchedule(attendingEvents)
        setEvents(createdEvents)
      }

      fetchData()
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
                {mySchedule.length > 0 ? (
                  mySchedule.map((event) => (
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
