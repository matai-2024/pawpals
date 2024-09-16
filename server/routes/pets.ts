import express from 'express'
import * as db from '../db/functions/pets.ts'
import { PetProfileData } from '../../models/forms.ts'
import checkJwt, { JwtRequest } from '../db/auth0.ts'

const router = express.Router()

// GET all pets (joins pet and trait tables)
router.get('/', async (req, res) => {
  try {
    const pets = await db.getAllPets()
    res.status(200).json(pets)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// GET pet by id
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const pet = await db.getPetById(Number(id))
    res.status(200).json(pet)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// GET pets by owner id
router.get('/owner/:id', async (req, res) => {
  const { id } = req.params
  try {
    const pets = await db.getPetsByOwnerId(Number(id))
    res.status(200).json(pets)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// DELETE pet by id
// TODO: Fix deletePet function
router.delete('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    await db.deletePet(Number(id))
    res.sendStatus(204)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// POST / add a new pet
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const newPet: PetProfileData = req.body
    const externalKey = req.auth?.sub
    console.log('External key', externalKey)
    if (!externalKey) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    const id = await db.createNewPet(newPet, externalKey)
    res.status(201).json(id)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

// PATCH / edit pet by id
// TODO: Fix updatePet function
router.patch('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  const pet: PetProfileData = req.body
  try {
    await db.updatePet(pet, Number(id))
    res.status(201).json(id)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

export default router
