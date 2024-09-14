import express from 'express'

import * as db from '../db/functions/owners.ts'
import checkJwt from '../db/auth0.ts'
import { ownerDataSchema } from '../../models/forms.ts'

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
    res.status(201).json(owner)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// POST Upsert owners to pass auth0 id into db
// this route is used for both creating and updating a user
router.post('/', checkJwt, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  const form = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  try {
    const profileResult = ownerDataSchema.safeParse(form)
    // safeParse is a feature from zod, which checks that the input meets the criteria in the schema.
    // it will return a result object which allows you to check for success or failure.
    if (!profileResult.success) {
      res.status(400).json({ message: 'Invalid form' })
      return
    }

    if (profileResult.success) {
      const profile = { ...profileResult.data, auth0Id }
      await db.upsertOwners(profile)
      res.sendStatus(201)
      return
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

// Delete an owner
// Edit an owner

export default router
