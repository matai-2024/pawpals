import request from 'superagent'
import { Attendee, AttendeePet } from '../../models/attendees'

const rootUrl = '/api/v1/attendees'

// get all attendees
export async function fetchAttendees() {
  const res = await request.get(rootUrl)
  return res.body as Attendee[]
}

// get attendees by event id
export async function fetchAttendeesByEventId(eventId: number) {
  const res = await request.get(`${rootUrl}/event/${eventId}`)
  return res.body as AttendeePet[]
}
