import request from 'superagent'
import { EventData } from '../../models/events'

const rootUrl = '/api/v1/events'

// get all events
export async function fetchEvents() {
  const res = await request.get(rootUrl)
  return res.body as Event[]
}

// add an event
export async function addEvent(newEvent: EventData, token: string) {
  const res = await request
    .post(rootUrl + '/')
    .set('Authorization', `Bearer ${token}`)
    .send(newEvent)
  return res.body as number
}

//GET event by id
export async function getEventById(id: number, token: string) {
  const res = await request
    .get(`${rootUrl}/event/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body as Event
}

//DEL event by id
export async function delEvent(id: number, token: string) {
  await request
    .delete(`${rootUrl}/event/${id}`)
    .set('Authorization', `Bearer ${token}`)
}

// TODO
// get event by creator id
export async function getEventsByCreatorId(ownerId: string) {
  const res = await request.get(`${rootUrl}/creator/${ownerId}`)
  return res.body as Event[]
}
