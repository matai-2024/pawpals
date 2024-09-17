import request from 'superagent'

const rootUrl = '/api/v1/attendees'

// get all attendees
export async function fetchAttendees() {
  const res = await request.get(rootUrl)
  return res.body
}
