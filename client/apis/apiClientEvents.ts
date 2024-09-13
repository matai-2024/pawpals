import request from 'superagent'

const rootUrl = '/api/v1/events'

// get all events
export async function fetchEvents() {
  const res = await request.get(rootUrl)
  return res.body as Event[]
}

// add an event
export async function addEvent(newEvent: EventData) {
  const res = await request.post(rootUrl + '/').send(newEvent)
  return res.body as number
}

// TODO
// get event by id
// get event by creator id
// delete by id
