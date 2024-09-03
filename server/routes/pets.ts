import express from 'express'

import * as db from '../db/functions/pets.ts'
import { Pet, PetData, PetProfileData } from '../../models/forms.ts'

const router = express.Router()

// get all
router.get('/', async (req, res) => {
  try {
    const pets = await db.getAllPets()
    res.status(200).json(pets)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// get by id
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const pet = await db.getPetById(Number(id))
    res.status(200).json(pet)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// get by owner id
router.get('/owner/:id', async (req, res) => {
  const id = req.params.id
  try {
    const pets = await db.getPetsByOwnerId(Number(id))
    res.status(200).json(pets)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// delete pet by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await db.deletePet(Number(id))
    res.sendStatus(204)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// add a new pet
router.post('/', async (req, res) => {
  try {
    const newPet: PetProfileData = req.body
    const id = await db.createNewPetTraits(newPet)
    res.status(201).json(id)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// edit pet by id
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const pet: Pet = req.body
  try {
    await db.updatePet(pet, Number(id))
    res.status(201).json(id)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

export default router
