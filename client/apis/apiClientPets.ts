import request from 'superagent'
import { PetProfile, PetProfileDataInit } from '../../models/forms.ts'

const rootUrl = '/api/v1/pets'

// get all pets
export async function fetchPets() {
  const res = await request.get(rootUrl)
  return res.body as PetProfile[]
}

// get pet by id
export async function fetchPetById(id: number) {
  const res = await request.get(rootUrl + '/' + id)
  return res.body as PetProfile
}

// get pets by owner id
export async function fetchPetsByOwnerId(id: number) {
  const res = await request.get(rootUrl + '/owner/' + id)
  return res.body as PetProfile[]
}

// delete by id
export async function deletePetById(id: number, token: string) {
  await request
    .delete(rootUrl + '/' + id)
    .set('Authorization', `Bearer ${token}`)
}

// add a pet
export async function addPet(newPet: PetProfileDataInit, token: string) {
  console.log(newPet)
  const res = await request
    .post(rootUrl + '/')
    .set('Authorization', `Bearer ${token}`)
    .send(newPet)
  return res.body as number
}
// TODO
// Check these work!!
// delete by id
// update
// log res.body is not returning
