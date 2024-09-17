import request from 'superagent'
import { EventData, Event } from '../../models/events'

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
export async function getEventById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body as Event
}

//DEL event by id
export async function delEvent(id: number) {
  await request.delete(`${rootUrl}/${id}`)
  // .set('Authorization', `Bearer ${token}`)
}

//GET events by pet id
export async function getEventsByPetId(id: number) {
  const res = await request.get(`${rootUrl}/pet/${id}`)
  // .set('Authorization', `Bearer ${token}`)
  return res.body as Event[]
}

// TODO
// get event by creator id
export async function getEventsByCreatorId(ownerId: string) {
  const res = await request.get(`${rootUrl}/creator/${ownerId}`)
  return res.body as Event[]
}
