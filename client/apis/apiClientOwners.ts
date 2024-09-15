import request from 'superagent'
import { Owner } from '../../models/forms'

const rootUrl = '/api/v1/owners'

// get owner by pet id
export async function getOwnerByPetId(id: number) {
  const res = await request.get(`${rootUrl}/pet/${id}`)
  return res.body as Owner
}
