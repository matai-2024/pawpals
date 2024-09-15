import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from '../connection.ts'
import { deleteEvent, getAllEvents } from './events'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('deleteEvent', () => {
  it('Should delete an event based on id', async () => {
    const id = 3
    await deleteEvent(id)
    const allEvents = await getAllEvents()
    expect(allEvents.includes(id)).toBe(false)
  })
})
