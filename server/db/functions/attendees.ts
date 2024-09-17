import db from '../connection.ts'

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
