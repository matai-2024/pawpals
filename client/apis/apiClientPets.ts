import request from 'superagent'
import { Pet, PetData, PetProfileData } from '../../models/forms.ts'

const rootUrl = '/api/v1/pets'

// get all pets
export async function fetchPets() {
  const res = await request.get(rootUrl)
  return res.body as Pet[]
}

// get pet by id
export async function fetchPetById(id: number) {
  const res = await request.get(rootUrl + '/' + id)
  return res.body as Pet
}

// get pets by owner id
export async function fetchPetsByOwnerId(id: number) {
  const res = await request.get(rootUrl + 'owner/' + id)
  return res.body as Pet[]
}

// delete by id
export async function deletePetById(id: number) {
  await request.delete(rootUrl + '/' + id)
}

// add a pet
export async function addPet(newPet: PetProfileData) {
  const res = await request.post(rootUrl + '/').send(newPet)
  return res.body as number
}

// TODO
// delete by id
// update
// log res.body is not returning
