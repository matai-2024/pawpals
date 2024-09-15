// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../../../test-setup.tsx'
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

const MOCK_PET = {
  id: 1,
  ownerId: 1,
  petName: 'Pepper',
  image: 'pepper.webp',
  dateOfBirth: '2021-12-01',
  gender: 'Girlie pop',
  breed: 'Maltese',
  species: 'Dog',
  bio: 'I’m Pepper, the Maltese with a personality that’s as spicy as my name! My hobbies include performing the ‘zoomies’ at 3 AM and pretending my toys are top-secret spy gadgets. I may be small, but I’ve got big dreams—mostly involving endless belly rubs and making my humans laugh with my playful antics. I’m your go-to gal for a good time and an even better cuddle session!',
  busy: 'on',
  lazy: '',
  goofy: '',
  gorgeous: 'on',
  brat: 'on',
  loyal: '',
  playful: 'on',
  adventurous: 'on',
  foodie: 'on',
  snorer: '',
  crazy: 'on',
  floofy: 'on',
}

const MOCK_OWNER = {
  externalKey: 'auth0|66e4b53cec82a00a88d8d7a3',
  firstName: 'Anahera',
  lastName: 'Foley-Paama',
  email: 'anahera@email.com',
}

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Food Truck Night in Howick',
    date: '03-10-2024',
    time: '5:00 PM',
    location: 'Lloyd Elsmore Park, Sir Lloyd Drive, Auckland',
    description:
      '🍔🌮 Experience the Best of Street Food at Howick’s Ultimate Food Truck Night! 🚚🎉 Join us in Howick for an exciting Food Truck Night that promises a feast for all your senses! Get ready to dive into a world of flavors as the best food trucks in town come together to serve up mouthwatering dishes that will leave you craving more.',
    eventImage: 'event-1.webp',
    eventWebsite:
      'https://www.eventfinda.co.nz/2024/food-trucks-in-howick/auckland/pakuranga',
    audience: 'Anyone!',
    creatorId: 1,
  },
  {
    id: 10,
    title: 'Bunny Bonding Brunch',
    date: '05-12-2024',
    time: '11:00 AM',
    location: "Fluffy's Bistro, 678 Carrot Lane, Bunnyville",
    description:
      '🥕🐇 Enjoy a delightful brunch while bonding with your bunnies and other rabbit lovers! The event features bunny-friendly foods, educational talks on rabbit care, and a bunny play area.',
    eventImage: 'event-10.webp',
    eventWebsite: 'https://www.example.com/bunny-bonding-brunch',
    audience: 'Rabbit Owners',
    creatorId: 10,
  },
]

describe('Profile.tsx', () => {
  it('Displays a pet', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets/1')
      .reply(200, MOCK_PET)

    const screen = renderApp('/profiles/1')
    const petName = await screen.findByText('Pepper')
    const age = screen.getByTestId('age-heading')
    expect(petName).toBeVisible()
    expect(age).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  it('Displays an owner by pet id', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets/1')
      .reply(200, MOCK_PET)
    const scope2 = nock('http://localhost')
      .get('/api/v1/owners/pet/1')
      .reply(200, MOCK_OWNER)

    const screen = renderApp('/profiles/1')
    const ownerName = await screen.findByText('Owner: Anahera F.')
    const ownerHeading = await screen.findByTestId('owner')
    expect(ownerName).toBeVisible()
    expect(ownerHeading).toBeVisible()
    expect(scope.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
  })
  it('Displays a list of events the pet is attending', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets/1')
      .reply(200, MOCK_PET)
    const scope2 = nock('http://localhost')
      .get('/api/v1/events/pet/1')
      .reply(200, MOCK_EVENTS)

    const screen = renderApp('/profiles/1')
    const eventName = await screen.findByText('Bunny Bonding Brunch')
    expect(eventName).toBeVisible()
    expect(scope.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
  })
})
