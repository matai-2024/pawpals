import request from 'superagent'
import { Owner } from '../../models/forms.ts'

const rootUrl = '/api/v1/owners'

// get owner by id
export async function fetchOwnerById(id: number, token: string) {
  const res = await request.get(rootUrl + '/' + id).set('Authorization', `Bearer ${token}`)
  return res.body as Owner
}


// TODO
// Check these work!!
// delete by id
// update
// log res.body is not returning
