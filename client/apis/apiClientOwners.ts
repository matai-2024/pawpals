import { Owner } from '../../models/forms'
import request from 'superagent'

const rootUrl = '/api/v1/owners'
//get Owner info
export async function getOwnerInfo(externalKey: string) {
  const res = await request.get(rootUrl + '/' + externalKey)
  return res.body as Owner[]
}

// get owner by pet id
export async function getOwnerByPetId(id: number) {
  const res = await request.get(`${rootUrl}/pet/${id}`)
  console.log(res.body)
  return res.body as Owner
}
