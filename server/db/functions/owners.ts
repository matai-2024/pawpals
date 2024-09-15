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

// Get owner by external id
export async function getOwnerByExternalId(externalKey: string) {
  console.log('DB - Get OWNER by EXTERNAL KEY')
  const owner: OwnerData = await db('owners').where('external_key', externalKey).select('*').first()
  return owner
}

export async function upsertOwner(token: string) {
  await db('owners').where('external_key', token).then(async function(rows) {
    if (rows.length===0) {
      console.log('Add new owner')
      await db('owners').insert({first_name: 'booger', last_name: 'booger', email: 'email', external_key: token})
    }
    return db('owners').where('external_key', token).select().first()
  })
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
