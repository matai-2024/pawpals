import { Owner, OwnerData } from '../../../models/forms.ts'
import db from '../connection.ts'

// Get all owners
export async function getAllOwners() {
  const owners: Owner[] = await db('owners').select('*')
  return owners as Owner[]
}

// Get owner by id
export async function getOwnerById(id: number) {
  const owner: OwnerData = await db('owners').where({ id }).select('*').first()
  return owner as Owner
}

export async function upsertOwner(owner: Owner) {
  const { id, externalKey, firstName, lastName, email } = owner
  await db('owners')
        .insert({
          id: id,
          external_key: externalKey,
          first_name: firstName,
          last_name: lastName,
          email: email,
        })
        .onConflict('external_key')
        .merge()
}

// Add new owner
// TODO: Check this works
export async function addNewOwner(owner: OwnerData) {
  const { firstName, lastName, email } = owner
  const serverData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
  }
  const result = await db('owners').insert(serverData)
  return result[0]
}

// Delete an owner
// TODO: Check this works
export async function deleteOwner(id: number) {
  return await db('owners').where({ id }).delete()
}

// TODO LIST:
// -----------
// Edit an owner
