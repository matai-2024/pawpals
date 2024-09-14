import { Owner } from '../../models/forms'
import request from 'superagent'

const rootUrl = '/api/v1/owners'
//get Owner info
export async function getOwnerInfo(externalKey: string) {
  const res = await request.get(rootUrl + externalKey)
  return res.body as Owner[]
}
