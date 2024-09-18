// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../pages/__tests__/test-setup.tsx'

import nock from 'nock'

const ACCESS_TOKEN = 'mock-access-token'
import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'fake-user@example.org', nickname: 'fake-user' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

const mockEvents = [
  {
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
  },
  {
    id: 2,
    title: 'Paws & Pints: Dog-Friendly Brewery Tour',
    date: '10-10-2024',
    time: '3:00 PM',
    location: 'The Hoppy Hound Brewery, 123 Bark Avenue, Dogtown',
    description:
      '🍺🐶 Grab your furry friend and join us for Paws & Pints, a brewery tour where dogs are more than welcome! Enjoy craft beers, dog-friendly treats, and live music while mingling with fellow pet lovers.',
    eventImage: 'https://example.com/images/paws_and_pints.jpg',
    eventWebsite: 'https://www.example.com/paws-and-pints',
    audience: 'Dog Owners',
    creatorId: 2,
  },
  {
    id: 3,
    title: 'Equestrian Gala: Horses & Harmony',
    date: '17-10-2024',
    time: '6:00 PM',
    location: 'Green Meadows Riding Club, 456 Gallop Lane, Equestriatown',
    description:
      '🏇✨ Join us for an elegant evening at the Equestrian Gala! Enjoy dressage performances, horse demonstrations, and a silent auction to benefit equine charities. Perfect for horse enthusiasts and their families.',
    eventImage: 'https://example.com/images/equestrian_gala.jpg',
    eventWebsite: 'https://www.example.com/equestrian-gala',
    audience: 'Horse Lovers',
    creatorId: 3,
  },
]

describe('Nav.tsx', () => {
  it('should render a dashboard link in the navigation menu', async () => {
    const screen = renderApp('/')
    const result = await screen.findByTestId('dashboard')
    expect(result).toBeTruthy()
  })

  it('on log out, it redirects the user to the home page', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, mockEvents)

    const { user, ...screen } = renderApp('/')
    const button = await screen.findByTestId('Log out')
    await user.click(button)
    const result = await screen.findByTestId('test title')
    expect(result).toBeTruthy()
    expect(scope.isDone()).toBe(true)
  })
})
