// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from './__tests__/test-setup.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'

vi.mock('@auth0/auth0-react')
const ACCESS_TOKEN = 'mock-access-token'

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'fake-user@example.org', nickname: 'fake-user' },
    getAccessTokenSilently: vi.fn().mockResolvedValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

const mockPets = [
  {
    id: 1,
    ownerId: 1,
    petName: 'Brian the Iguana',
    image: 'BrianTheIguana.JPG',
    dateOfBirth: '2021-12-01',
    breed: 'iguana',
  },
  {
    id: 2,
    ownerId: 2,
    petName: 'Rupert the Bear',
    image: 'rupert.JPG',
    dateOfBirth: '2021-12-01',
    breed: 'bear',
  },
  {
    id: 3,
    ownerId: 7,
    petName: 'Orion',
    image: 'orion.JPG',
    dateOfBirth: '2021-12-01',
    breed: 'pug',
  },
  {
    id: 4,
    ownerId: 2,
    petName: 'Pixel',
    image: 'pixel.JPG',
    dateOfBirth: '2021-12-01',
    breed: 'cat',
  },
  {
    id: 5,
    ownerId: 4,
    petName: 'Miso',
    image: 'miso.JPG',
    dateOfBirth: '2021-12-01',
    breed: 'cat',
  },
]

describe('ProfileList.tsx', () => {
  it('should display a list of pets', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets')
      .reply(200, mockPets)

    const screen = renderApp('/profiles')
    const PetName = await screen.findByText('Brian the Iguana')
    expect(PetName).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})

describe('ProfileList.tsx', () => {
  it('should display the correct amount of pets', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets')
      .reply(200, mockPets)

    const screen = renderApp('/profiles')
    const petsIds = await screen.findAllByTestId('pet-card-vert')
    expect(petsIds).toHaveLength(mockPets.length)
    expect(scope.isDone()).toBe(true)
  })
})

describe('ProfileList.tsx', () => {
  it('should display the search bar on the page', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets')
      .reply(200, mockPets)

    const screen = renderApp('/profiles')
    const searchBar = await screen.findByTestId('pet-card-search')

    expect(searchBar).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
