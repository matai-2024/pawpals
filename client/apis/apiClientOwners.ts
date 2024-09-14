import { Owner, OwnerData } from '../../models/forms'
import request from 'superagent'

const rootUrl = '/api/v1/owners'

//get Owner info
export async function getOwnerInfo(externalKey: string) {
  const res = await request.get(rootUrl + externalKey)
  return res.body as Owner[]
}

// Get an owner by external key
export async function getOwner(token: string) {
  const res = await request
    .get('/api/v1/users/')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as Owner
}

// Upsert owners to pass auth0 id into db
export async function upsertOwner(
  form: OwnerData | Owner,
  token: string
) {
  await request
    .post('/api/v1/owners')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
}