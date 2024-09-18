import db from '../connection.ts'
import { ParsedQs } from 'qs'
const camelCase = [
  'id',
  'event_id as eventId',
  'account_id as accountId',
  'pet_id as petId',
]

// Get all attendees
export async function getAllAttendees() {
  const attendees = await db('attendees').select(camelCase)
  return attendees
}

export async function getEventsForPetsByOwnerId(
  ownerId: string | string[] | Readonly<unknown> | ParsedQs[] | null,
) {
  return await db('attendees')
    .join('pets', 'attendees.pet_id', 'pets.id') // Join attendees and pets table
    .join('events', 'attendees.event_id', 'events.id') // Join with events table
    .select('events.*') // Get all event details
    .where('pets.owner_id', ownerId) // Filter by ownerId (accountId)
}
