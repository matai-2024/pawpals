import express from 'express'

import * as db from '../db/functions/owners.ts'
import checkJwt, { JwtRequest } from '../db/auth0.ts'

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

// GET owner by external id
router.get('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    const owner = await db.getOwnerById(id)
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

// GET owner by pet id
router.get('/pet/:id', async (req, res) => {
  const { id } = req.params
  try {
    const owner = await db.getOwnerByPetId(Number(id))
    res.json(owner)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// TODO LIST:
// -----------
// Add new owner
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const externalId = req.auth?.sub
    const owner = req.body
    await db.addNewOwner({ ...owner, externalId })
    res.status(201).json(owner)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET owner by event id
router.get('/event/:id', async (req, res) => {
  const { id } = req.params
  try {
    const owner = await db.getOwnerByEventId(Number(id))
    res.json(owner)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// Delete an owner
// Edit an owner

export default router
