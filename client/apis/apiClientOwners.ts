import { CreateOwnerData, Owner } from '../../models/forms'
import request from 'superagent'

const rootUrl = '/api/v1/owners'
export async function createOwner(data: CreateOwnerData, token: string) {
  await request
    .post(rootUrl + '/')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(data)
}

//get Owner info
export async function getOwnerInfo(externalKey: string) {
  const res = await request
    .get(rootUrl + '/' + externalKey)
    .set('Content-Type', 'application/json')
  return res.body as Owner[]
}

// get owner by pet id
export async function getOwnerByPetId(id: number) {
  const res = await request.get(`${rootUrl}/pet/${id}`)
  return res.body as Owner
}
