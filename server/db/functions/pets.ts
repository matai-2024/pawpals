import db from '../connection.ts'
import { Form, PetProfileData } from '../../../models/forms.ts'

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

// Get all pets
export async function getAllPets() {
  const petsAndTraits = await db('pets')
    .join('traits', 'traits.id', 'pets.trait_id')
    .select(camelCase)
  return petsAndTraits as Form[]
}

// Get a pet by id
export async function getPetById(id: number) {
  const pets = await db('pets')
    .join('traits', 'traits.id', 'pets.trait_id')
    .where('pets.id', id)
    .select(camelCase)
    .first()
  return pets as Form
}

// Get pets by owner_id
export async function getPetsByOwnerId(ownerId: number) {
  const pets = await db('pets')
    .join('traits', 'traits.id', 'pets.trait_id')
    .where('owner_id', ownerId)
    .select(camelCase)
  return pets as Form[]
}

// Delete a pet by id
// TODO: Needs fix, this deletes pet table data but not trait table data
export async function deletePet(petsId: number) {
  const traitId = await db('pets')
    .where('pets.id', petsId)
    .select('trait_id as id')
    .first()
  // eslint-disable-next-line no-console
  console.log(traitId.id)

  const deleteTraits = await db('traits')
    .where('traits.id', traitId.id)
    .delete()
  const deletePet = await db('pets').where('pets.id', petsId).delete()

  return { deleteTraits, deletePet }
}

// Add a pet
export async function createNewPet(
  newPetProfile: PetProfileData,
  externalKey: string,
) {
  //MVP - Hard code an image if there isn't one
  if (newPetProfile.image == '') newPetProfile.image = 'miso.jpg'
  console.log(newPetProfile)

  // All the data being passed in from the form
  const {
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

  // Defining traits data being passed in by the form
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

  // Insert traits data into the traits table and return traits.id
  const traitResult = await db('traits').insert(traitData, ['id'])

  // Defining pets data being passed in by the form, incl traits.id
  const petData = {
    owner_id: externalKey,
    pet_name: petName,
    image,
    dob: dateOfBirth,
    gender,
    breed,
    species,
    bio,
    trait_id: traitResult[0].id,
  }

  // Insert pets data into the pets table and return pets.id
  const petResult = await db('pets').insert(petData, ['id'])

  // Return pets.id in order to navigate to their profile after submitting sign up form, see client/pages/Profile.tsx
  return petResult[0].id
}

// Edit a pet
// TODO: Needs fix, recommend starting from scratch. Might need to follow createNewPet function
export async function updatePet(pet: PetProfileData, id: number) {
  return await db('pets').where({ id }).update(pet).returning('id')
}
