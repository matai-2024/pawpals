import request from 'superagent'
import { PetData } from '../../models/forms'

const rootUrl = '/api/v1/pets'

export function getPets(): Promise<string[]> {
  return request.get(rootUrl).then((res) => {
    return res.body.pets
  })
}

// addPet function to call 'api/v1/pets'
export async function addPet(data: PetData) {
  console.log('api client', data)

  const res = await request.post(`/api/v1/pets/`).send(data)
  console.log('api client res.body',res.body)
  return res.body
}
