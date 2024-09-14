import { vi, describe, it, expect } from 'vitest'
import * as db from '../db/functions/pets.ts'
import request from 'supertest'
import server from '../server'
import { getMockToken } from './mockToken.ts'

vi.mock('../db/functions/pets')
vi.mocked(db.createNewPet).mockResolvedValue(201)

describe('POST /api/v1/pets/', () => {
  it('should return 201 when creating a new pet', async () => {
    const newPet = {
      ownerId: 1,
      petName: 'Marmite',
    }

    const response = await request(server)
      .post('/api/v1/pets')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(newPet)
    expect(response.status).toBe(201)
  })

  it('should return 401 if invalid token', async () => {
    const token = 'shambles'

    const response = await request(server)
      .post('/api/v1/pets')
      .set('authorization', `Bearer ${token}`)
    expect(response.status).toBe(401)
  })
})