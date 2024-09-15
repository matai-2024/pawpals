import { Owner } from '../../models/forms'
import request from 'superagent'

const rootUrl = '/api/v1/owners'
//get Owner info
export async function getOwnerInfo(externalKey: string) {
  const res = await request.get(rootUrl + '/' + externalKey)
  return res.body as Owner[]
}

export async function upsertProfile(token: string) {
  console.log('api upsert')
  const res = await request
    .post(rootUrl + '/auth/' + token)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  console.log(res.body)
  return res.body
}

export async function getOwnerByExternalId(token: string) {
  console.log('API - GET OWNER BY EXTERNAL KEY')
  const res = await request
    .get(rootUrl + '/auth/' + token)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  console.log(res.body)
    return res.body
}
