import express from 'express'

import * as db from '../db/functions/events.ts'

const router = express.Router()

// Get attendees by account id
router.get('/attendees', async (req, res) => {
  const { accountId } = req.query

  if (!accountId) {
    return res.status(400).json({ error: 'accountId is required' })
  }

  try {
    const attendeeData = await db.getAttendeesByAccountId(Number(accountId))
    res.json(attendeeData)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching attendees' })
  }
})

module.exports = router
