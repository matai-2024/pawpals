import { Event, EventData } from '../../../models/events.ts'
import connection from '../connection.ts'
import db from '../connection.ts'

const camelCase = [
  'id',
  'title',
  'date',
  'time',
  'location',
  'description',
  'event_image as eventImage',
  'event_website as eventWebsite',
  'audience',
  'creator_id as creatorId',
]

// Get all events
export async function getAllEvents() {
  const events = await db('events').select(
    'id',
    'title',
    'date',
    'time',
    'location',
    'description',
    'event_image as eventImage',
    'event_website as eventWebsite',
    'audience',
    'creator_id as creatorId',
  )
  return events as Event[]
}

// Get event by ID
export async function getEventById(id: number) {
  return await db('events').select(camelCase).where({ id }).first()
}

// DEL event by ID
export async function delEvent(id: number) {
  return await db('events').where({ id }).del()
}

// Add an event
export async function insertEvent(eventData: EventData) {
  const {
    title,
    date,
    time,
    location,
    description,
    eventImage,
    eventWebsite,
    audience,
    creatorId,
  } = eventData

  const newEvent = {
    title,
    date,
    time,
    location,
    description,
    event_image: eventImage,
    event_website: eventWebsite,
    audience,
    creator_id: creatorId,
  }

  const result = await db('events').insert(newEvent, ['id'])
  if (newEvent.event_image == '') newEvent.event_image = 'miso.webp'
  return result[0].id
}

// Get all events by pet id
export async function getEventsByPetId(petId: number) {
  const events = await db('events')
    .join('attendees', 'attendees.event_id', 'events.id')
    .where('attendees.pet_id', petId)
    .select(
      'events.id',
      'events.title',
      'events.date',
      'events.time',
      'events.location',
      'events.description',
      'events.event_image as eventImage',
      'events.event_website as eventWebsite',
      'events.audience',
      'events.creator_id as creatorId',
    )
  return events as Event[]
}

// Get attendees based on accountId
export async function getAttendeesByAccountId(accountId: number) {
  try {
    return await connection('attendees')
      .join('pets', 'attendees.pet_id', 'pets.id')
      .join('events', 'attendees.event_id', 'events.id')
      .where('attendees.accountId', accountId) // Filter by the owner's ID
  } catch (error) {
    console.error('Error fetching attendees:', error)
    throw error
  }
}
