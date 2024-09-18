// Dashboard.test.tsx
// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from './test-setup.tsx' // Adjust this import based on your setup
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'

// Mocking @auth0/auth0-react
vi.mock('@auth0/auth0-react')
const ACCESS_TOKEN = 'mock-access-token'

const MOCK_PETS = [
  {
    id: 1,
    ownerId: 'fake-user-id',
    petName: 'Pepper',
    image: 'pepper.webp',
  },
]

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Food Truck Night in Howick',
    date: '03-10-2024',
    time: '5:00 PM',
    eventImage: 'event-1.webp',
    creatorId: 1,
    going: true,
  },
]

const MOCK_SCHEDULE = [
  {
    id: 2,
    title: 'Bunny Bonding Brunch',
    date: '05-12-2024',
    time: '11:00 AM',
    eventImage: 'event-10.webp',
    creatorId: 2,
    going: true,
  },
]

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'fake-user-id' },
    getAccessTokenSilently: vi.fn().mockResolvedValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

describe('Dashboard', () => {
  it('Displays the Dashboard with Pets, Schedule, and Events', async () => {
    // Mock API responses
    const scope1 = nock('http://localhost')
      .get('/api/v1/pets')
      .query({ ownerId: 'fake-user-id' })
      .reply(200, MOCK_PETS)

    const scope2 = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, MOCK_EVENTS)

    const scope3 = nock('http://localhost')
      .get('/api/v1/attendees/fake-user-id')
      .reply(200, MOCK_SCHEDULE)

    const screen = renderApp('/dashboard') // Adjust if necessary

    // Verify Pets Section
    expect(await screen.findByText('Pepper')).toBeVisible()

    // Verify Schedule Section
    expect(await screen.findByText('Bunny Bonding Brunch')).toBeVisible()

    // Verify Events Section
    expect(await screen.findByText('Food Truck Night in Howick')).toBeVisible()

    expect(scope1.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
    expect(scope3.isDone()).toBe(true)
  })

  it('Displays loading state when data is being fetched', async () => {
    // Temporarily mock useAuth0 to return loading state
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { sub: 'fake-user-id' },
      getAccessTokenSilently: vi.fn().mockResolvedValue(ACCESS_TOKEN),
      loginWithRedirect: vi.fn(),
      logout: vi.fn(),
      isLoading: true,
    } as any)

    const screen = renderApp('/dashboard') // Adjust if necessary
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('Displays message when no pets are available', async () => {
    const scope1 = nock('http://localhost')
      .get('/api/v1/pets')
      .query({ ownerId: 'fake-user-id' })
      .reply(200, [])

    const scope2 = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, MOCK_EVENTS)

    const scope3 = nock('http://localhost')
      .get('/api/v1/attendees/fake-user-id')
      .reply(200, MOCK_SCHEDULE)

    const screen = renderApp('/dashboard') // Adjust if necessary
    const noPetsMessage = await screen.findByText(
      'You do not have any pets yet.',
    )
    expect(noPetsMessage).toBeVisible()

    expect(scope1.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
    expect(scope3.isDone()).toBe(true)
  })
})
