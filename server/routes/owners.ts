import express from 'express'

import * as db from '../db/functions/owners.ts'

const router = express.Router()

// GET all owners for /api/v1/owners
router.get('/', async (req, res) => {
  try {
    const owners = await db.getAllOwners()
    res.json(owners)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET owner by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const owner = await db.getOwnerById(Number(id))
    res.json(owner)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET owner by name
router.get('/name/:firstName', async (req, res) => {
  const { firstName } = req.params
  try {
    const owners = await db.getOwnerByName(firstName)
    res.json(owners)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// TODO LIST:
// -----------
// Add new owner
// Delete an owner
// Edit an owner

export default router
