import { EventData } from '../../../models/events.ts'
import db from '../connection.ts'

const camelCase = [
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

// delete an event
export async function deleteEvent(id: number) {
  return await db('events').where({ id }).del()
}
