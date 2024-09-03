import db from '../connection.ts'
import { Pet, PetData } from '../../../models/forms.ts'

const camelCase = [
  'id',
  'owner_id as ownerId',
  'pet_name as petName',
  'image',
  'dob as dateOfBirth',
  'gender',
  'breed',
  'species',
  'bio',
  'trait',
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

// Join pets and traits and get all
export async function getAllPetsAndTraits() {
  const petsAndTraits = await db('pets')
    .join('traits', 'traits.id', 'pets.trait_id')
    .select()
  return petsAndTraits
}

// Get all pets
export async function getAllPets() {
  const pets: PetData[] = await db('pets').select(camelCase)
  return pets as Pet[]
}

// Get a pet by id
export async function getPetById(id: number) {
  const pets: PetData = await db('pets').where({ id }).select(camelCase).first()
  return pets as Pet
}

// Get pets by owner_id
export async function getPetsByOwnerId(ownerId: number) {
  return await db('pets').where('owner_id', ownerId).select(camelCase)
}

// Delete a pet by id
export async function deletePet(id: number) {
  return await db('pets').where({ id }).delete()
}

// Add a pet
export async function createNewPet(newPet: PetData) {
  const {
    ownerId,
    petName,
    image,
    dateOfBirth,
    gender,
    breed,
    species,
    bio,
    trait,
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
  } = newPet
  // Ensure that the object matches your table's column names exactly
  const massageData = {
    owner_id: ownerId,
    pet_name: petName,
    image,
    dob: dateOfBirth,
    gender,
    breed,
    species,
    bio,
    trait,
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

  const result = await db('pets').insert(massageData, ['id'])
  // console.log('dbfunc result', result[0].id)
  return result[0].id
}

// Edit a pet
export async function updatePet(pet: PetData, id: number) {
  return await db('pets').where({ id }).update(pet).returning('id')
}

// TODO Add pet and the aliases
