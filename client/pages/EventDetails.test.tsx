// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../../test-setup.tsx'
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

const MOCK_EVENT = {
  id: 1,
  title: 'Food Truck Night in Howick',
  date: '03-10-2024',
  time: '5:00 PM',
  location: 'Lloyd Elsmore Park, Sir Lloyd Drive, Auckland',
  description:
    '🍔🌮 Experience the Best of Street Food at Howick’s Ultimate Food Truck Night! 🚚🎉 Join us in Howick for an exciting Food Truck Night that promises a feast for all your senses! Get ready to dive into a world of flavors as the best food trucks in town come together to serve up mouthwatering dishes that will leave you craving more.',
  eventImage:
    'https://eastaucklandtourism.co.nz/wp-content/uploads/2024/08/Food-Truck.jpg',
  eventWebsite:
    'https://www.eventfinda.co.nz/2024/food-trucks-in-howick/auckland/pakuranga',
  audience: 'Anyone!',
  creatorId: 1,
}

describe('EventDetails.tsx', () => {
  it('should display details about the event', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/events/${MOCK_EVENT.id}`)
      .reply(200, MOCK_EVENT)

    const screen = renderApp('/events/1')

    const eventTitle = await screen.findByText('Food Truck Night in Howick')
    expect(eventTitle).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
