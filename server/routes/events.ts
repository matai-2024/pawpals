import express from 'express'

import * as db from '../db/functions/events.ts'
import checkJwt from '../db/auth0.ts'
import { EventData } from '../../models/events.ts'

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

// POST / add a new event
router.post('/', checkJwt, async (req, res) => {
  try {
    const newEvent: EventData = req.body
    const id = await db.insertEvent(newEvent)
    res.status(201).json(id)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.status(500).json(error)
  }
})

export default router
