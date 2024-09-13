import { vi, describe, it, expect } from 'vitest'
import * as db from '../db/functions/owners.ts'
import request from 'supertest'
import server from '../server'
import { getMockToken } from './mockToken.ts'

vi.mock('../db/functions/owners')
vi.mocked(db.addNewOwner).mockResolvedValue(201)

const mockToken = getMockToken()
describe('POST /api/v1/owners/', () => {
  it('should return 201 when creating a new owner', async () => {
    const newOwner = {
      firstName: 'Sam',
      lastName: 'Ham',
      email: 'sam@ham.br',
    }

    const response = await request(server)
      .post('/api/v1/owners')
      .set('authorization', `Bearer ${mockToken}`)
      .send(newOwner)
    expect(response.status).toBe(201)
  })

  it('should return 404 if invalid token', async () => {
    const token = 'shambles'

    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${token}`)
    expect(response.status).toBe(404)
  })
})
