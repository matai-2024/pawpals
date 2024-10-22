import { Owner, OwnerData } from '../../../models/forms.ts'
import db from '../connection.ts'

const camelCase = [
  'external_key as externalKey',
  'first_name as firstName',
  'last_name as lastName',
  'email',
]

// Get all owners
export async function getAllOwners() {
  const owners: Owner[] = await db('owners').select('*')
  return owners as Owner[]
}

// Get owner by id
export async function getOwnerById(id: string) {
  const owner: OwnerData = await db('owners')
    .where('external_key', id)
    .select('*')
    .first()
  return owner as Owner
}

// Get owner by name
export async function getOwnerByName(firstName: string) {
  const owners: OwnerData[] = await db('owners')
    .where('first_name', firstName)
    .select('*')
  return owners as Owner[]
}

// Add new owner
// TODO: Check this works
export async function addNewOwner(owner: OwnerData) {
  const { firstName, lastName, email, externalId } = owner
  const serverData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    external_key: externalId,
  }
  const result = await db('owners').insert(serverData)
  return result[0]
}

// Delete an owner
// TODO: Check this works
export async function deleteOwner(id: number) {
  return await db('owners').where({ id }).delete()
}

// Get owner by pet id
export async function getOwnerByPetId(petId: number) {
  const owner: OwnerData = await db('owners')
    .join('pets', 'pets.owner_id', 'owners.external_key')
    .where('pets.id', petId)
    .select(camelCase)
    .first()
  return owner as Owner
}

// Get owner by owner id
export async function getOwnerByEventId(eventId: number) {
  const owner: OwnerData = await db('owners')
    .join('events', 'events.creator_id', 'owners.id')
    .where('events.id', eventId)
    .select(camelCase)
    .first()
  return owner as Owner
}

// TODO LIST:
// -----------
// Edit an owner
