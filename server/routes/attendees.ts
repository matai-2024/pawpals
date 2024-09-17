import express from 'express'
import * as db from '../db/functions/attendees.ts'

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

// Get attendees by account id
// router.get('/attendees', async (req, res) => {
//   const { accountId } = req.query

//   if (!accountId) {
//     return res.status(400).json({ error: 'accountId is required' })
//   }

//   try {
//     const attendeeData = await db.getAttendeesByAccountId(Number(accountId))
//     res.json(attendeeData)
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching attendees' })
//   }
// })

export default router
