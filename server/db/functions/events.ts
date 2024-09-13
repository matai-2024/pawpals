import db from '../connection.ts'

// Get all events
export async function getAllEvents() {
  const events = await db('events').select('*')
  return events as Event[]
}

