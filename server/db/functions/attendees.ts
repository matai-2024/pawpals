import { Attendee, AttendeePet } from '../../../models/attendees.ts'
import db from '../connection.ts'
import { ParsedQs } from 'qs'
const camelCase = [
  'id',
  'event_id as eventId',
  'account_id as accountId',
  'pet_id as petId',
]

const petCamelCase = [
  'attendees.id as attendeeId',
  'attendees.event_id as eventId',
  'attendees.account_id as accountId',
  'attendees.pet_id as petId',
  'pets.owner_id as ownerId',
  'pets.pet_name as petName',
  'pets.image as image',
  'pets.dob as dateOfBirth',
  'pets.gender as gender',
  'pets.breed as breed',
  'pets.species as species',
  'pets.bio as bio',
]

// Get all attendees
export async function getAllAttendees() {
  const attendees = await db('attendees').select(camelCase)
  return attendees as Attendee[]
}

// Get attendees by event id
export async function getAttendeesByEventId(eventId: number) {
  const attendeesPets = await db('attendees')
    .join('pets', 'pets.id', 'attendees.pet_id')
    .where('event_id', eventId)
    .select(petCamelCase)
  return attendeesPets as AttendeePet[]
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
