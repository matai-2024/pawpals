import express from 'express'
import * as db from '../db/functions/attendees'

const router = express.Router()

// Get all the attendees for /api/v1/attendees
router.get('/', async (req, res) => {
  try {
    const attendees = await db.getAllAttendees()
    return res.json(attendees)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  const { id: accountId } = req.params // Access the accountId from the URL params

  if (!accountId) {
    return res.status(400).json({ error: 'accountId is required' })
  }

  try {
    const events = await db.getEventsForPetsByOwnerId(accountId)
    return res.json(events)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET attendees by event id
router.get('/event/:id', async (req, res) => {
  const eventId = req.params.id
  try {
    const attendees = await db.getAttendeesByEventId(Number(eventId))
    res.json(attendees)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

export default router
