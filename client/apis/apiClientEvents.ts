import request from 'superagent'
import { Event } from '../../models/events'

const rootUrl = '/api/v1/events'

//GET all events
export async function getEvents(token: string) {
  const res = await request.get(rootUrl).set('Authorization', `Bearer ${token}`)
  return res.body as Event[]
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

//ADD event
export async function addEvent(newEvt: Event, token: string) {
  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(newEvt)

  return res.body as number
}

//TODO:
//test these work
