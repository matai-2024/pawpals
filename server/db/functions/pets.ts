import db from '../connection.ts'

import { Pet, PetData } from '../../../models/forms.ts'

// Get all pets
export async function getAllPets() {
  const pets: PetData[] = await db('pets').select('*')
  return pets as Pet[]
}

// Get a pet by id
export async function getPetById(id: number) {
  const pets: PetData = await db('pets').where({ id }).select('*').first()
  return pets as Pet
}

// Get pets by owner_id
export async function getPetsByOwnerId(ownerId: number) {
  return await db('pets').where('owner_id', ownerId).select('*')
}

// Delete a pet by id
export async function deletePet(id: number) {
  return await db('pets').where({ id }).delete()
}

// Add a pet
export async function addNewPet(pet: PetData) {
  const {
    ownerId,
    petName,
    dateofBirth,
    sex,
    breed,
    species,
    bio,
    faveFood,
    traits,
    busy,
    lazy,
    goofy,
    gorgeous,
    brat,
    loyal,
    playful,
    adventurous,
    foodie,
    snorer,
    crazy,
    floofy,
  } = pet

  const serverData = {
    owner_id: ownerId,
    pet_name: petName,
    dob: dateofBirth,
    sex,
    breed,
    species,
    bio,
    fave_food: faveFood,
    traits,
    busy,
    lazy,
    goofy,
    gorgeous,
    brat,
    loyal,
    playful,
    adventurous,
    foodie,
    snorer,
    crazy,
    floofy,
  }
  const result = await db('pets').insert(serverData)
  return result[0]
}

// TODO LIST:
// -----------
// Edit a pet
