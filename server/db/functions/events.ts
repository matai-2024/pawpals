import db from '../connection.ts'

// Get all events
export async function getAllEvents() {
  const events = await db('events').select('*')
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
  }

  const result = await db('events').insert(newEvent, ['id'])
  return result
}
