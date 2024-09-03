import db from '../connection.ts'
import { Pet, PetData, PetProfileData } from '../../../models/forms.ts'

const camelCase = [
  'pets.id as id',
  'pets.owner_id as ownerId',
  'pets.pet_name as petName',
  'pets.image as image',
  'pets.dob as dateOfBirth',
  'pets.gender as gender',
  'pets.breed as breed',
  'pets.species as species',
  'pets.bio as bio',
  // 'pets.trait_id as traitId',
  'traits.busy as busy',
  'traits.lazy as lazy',
  'traits.goofy as goofy',
  'traits.gorgeous as gorgeous',
  'traits.brat as brat',
  'traits.loyal as loyal',
  'traits.playful as playful',
  'traits.adventurous as adventurous',
  'traits.foodie as foodie',
  'traits.snorer as snorer',
  'traits.crazy as crazy',
  'traits.floofy as floofy',
]

// Get all
export async function getAllPets() {
  const petsAndTraits = await db('pets')
    .join('traits', 'traits.id', 'pets.trait_id')
    .select(camelCase)
  return petsAndTraits
}

// Get a pet by id
export async function getPetById(id: number) {
  const pets = await db('pets')
    .join('traits', 'traits.id', 'pets.trait_id')
    .where('pets.id', id)
    .select(camelCase)
    .first()
  return pets
}

// Get pets by owner_id
export async function getPetsByOwnerId(ownerId: number) {
  return await db('pets').where('owner_id', ownerId).select(camelCase)
}

// Delete a pet by id
export async function deletePet(id: number) {
  return await db('pets').where({ id }).delete()
}

// // Add a pet
// export async function createNewPet(newPet: PetData) {
//   const {
//     ownerId,
//     petName,
//     image,
//     dateOfBirth,
//     gender,
//     breed,
//     species,
//     bio,
//     trait,
//     busy,
//     lazy,
//     goofy,
//     gorgeous,
//     brat,
//     loyal,
//     playful,
//     adventurous,
//     foodie,
//     snorer,
//     crazy,
//     floofy,
//   } = newPet
//   // Ensure that the object matches your table's column names exactly
//   const massageData = {
//     owner_id: ownerId,
//     pet_name: petName,
//     image,
//     dob: dateOfBirth,
//     gender,
//     breed,
//     species,
//     bio,
//     trait,
//     busy,
//     lazy,
//     goofy,
//     gorgeous,
//     brat,
//     loyal,
//     playful,
//     adventurous,
//     foodie,
//     snorer,
//     crazy,
//     floofy,
//   }

//   const result = await db('pets').insert(massageData, ['id'])
//   // console.log('dbfunc result', result[0].id)
//   return result[0].id
// }

// Edit a pet
export async function updatePet(pet: PetData, id: number) {
  return await db('pets').where({ id }).update(pet).returning('id')
}

// TODO Add pet and the aliases

// Add a pet
export async function createNewPetTraits(newPetProfile: PetProfileData) {
  const {
    ownerId,
    petName,
    image,
    dateOfBirth,
    gender,
    breed,
    species,
    bio,
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
  } = newPetProfile
  // Ensure that the object matches your table's column names exactly
  const traitData = {
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
  const traitResult = await db('traits').insert(traitData, ['id'])

  const petData = {
    owner_id: ownerId,
    pet_name: petName,
    image,
    dob: dateOfBirth,
    gender,
    breed,
    species,
    bio,
    trait_id: traitResult[0].id,
  }
  const petResult = await db('pets').insert(petData, ['id'])
  // console.log('dbfunc result', result[0].id)
  return petResult[0].id
}
