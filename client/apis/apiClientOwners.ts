import { Owner, OwnerData } from '../../models/forms'
import request from 'superagent'

const rootUrl = '/api/v1/owners'
//get Owner info
export async function getOwnerInfo(externalKey: string) {
  const res = await request.get(rootUrl + '/' + externalKey)
  return res.body as Owner[]
}

export async function upsertProfile(data: OwnerData, token: string) {
  await request
    .post('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(data)
}