import express from 'express'

import * as db from '../db/functions/owners.ts'
import { validateAccessToken } from '../db/auth0'

const router = express.Router()

// Get owner by external key
router.get('/:token', validateAccessToken, async (req, res) => {
  try {
    console.log('Routes - GET OWNER BY EXTERNAL KEY')
    const token = req.params.token
    const user = db.getOwnerByExternalId(token)
    res.sendStatus(200).json(user)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// Add new owner AUTH0
router.post('/:token', validateAccessToken, async (req, res) => {
  console.log('Post owner with auth0 id')
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }


  try {
    console.log('TRY::Post owner with auth0 id')
    // res.sendStatus(200)
    const token = req.params.token
    await db.upsertOwner(token)
    res.status(201).json(token)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

export default router