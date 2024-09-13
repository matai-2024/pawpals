import express from 'express'

import * as db from '../db/functions/events.ts'

const router = express.Router()

// GET all events for /api/v1/events
router.get('/', async (req, res) => {
  try {
    const events = await db.getAllEvents()
    res.json(events)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

export default router