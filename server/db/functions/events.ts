import { Event, EventData } from '../../../models/events.ts'
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
  const events = await db('events').select(camelCase)
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
  return result[0].id
}
