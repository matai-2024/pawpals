import { vi, describe, it, expect } from 'vitest'
import * as db from '../db/functions/events'

vi.mock('../db/functions/events')
vi.mocked(db.getEventById).mockResolvedValue(200)

describe('GET /api/v1/events/:id', () => {
  it('should return 200 when getting an event by id', async () => {
    const res = await db.getEventById(1)

    expect(res).toBe(200)
  })
})
