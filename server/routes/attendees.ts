import express from 'express'
import * as db from '../db/functions/attendees'

const router = express.Router()

// Get all the tendies
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
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

export default router
