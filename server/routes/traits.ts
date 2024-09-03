import express from 'express'

import * as db from '../db/functions/traits.ts'

const router = express.Router()

// get all
router.get('/', async (req, res) => {
  try {
    const traits = await db.getAllTraits()
    res.status(200).json(traits)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

export default router
