import express from 'express'

import * as db from '../db/functions/owners.ts'
import checkJwt from '../db/auth0.ts'

const router = express.Router()

// GET all owners for /api/v1/owners
router.get('/', checkJwt, async (req, res) => {
  try {
    const owners = await db.getAllOwners()
    res.json(owners)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET owner by id
router.get('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    const owner = await db.getOwnerById(Number(id))
    res.json(owner)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET owner by name
router.get('/name/:firstName', checkJwt, async (req, res) => {
  const { firstName } = req.params
  try {
    const owners = await db.getOwnerByName(firstName)
    res.json(owners)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// TODO LIST:
// -----------
// Add new owner
router.post('/', checkJwt, async (req, res) => {
  try {
    const owner = req.body
    await db.addNewOwner(owner)
    let resStatus = 201 //success
    res.status(resStatus).json(owner)
  } catch (error) {
     // eslint-disable-next-line no-console
     console.log('Error: ', error)
     res.sendStatus(500)
  }
})

// Delete an owner
// Edit an owner

export default router
