import db from '../connection.ts'

import { Pet, PetData } from '../../../models/forms.ts'

const camelData = [
  'owner_id as ownerId',
  'pet_name as petName',
  'image',
  'dob as dateofBirth',
  'gender',
  'breed',
  'species',
  'bio',
  'fave_food as faveFood',
  'traits',
  'busy',
  'lazy',
  'goofy',
  'gorgeous',
  'brat',
  'loyal',
  'playful',
  'adventurous',
  'foodie',
  'snorer',
  'crazy',
  'floofy',
]

// Get all pets
export async function getAllPets() {
  const pets: PetData[] = await db('pets').select(camelData)
  return pets as Pet[]
}

// Get a pet by id
export async function getPetById(id: number) {
  const pets: PetData = await db('pets').where({ id }).select(camelData).first()
  return pets as Pet
}

// Get pets by owner_id
export async function getPetsByOwnerId(ownerId: number) {
  return await db('pets').where('owner_id', ownerId).select(camelData)
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
    image,
    dateofBirth,
    gender,
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
    image,
    dob: dateofBirth,
    gender,
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
  console.log('pets func result', result[0])

  return result[0]
}

// TODO LIST:
// -----------
// Edit a pet
