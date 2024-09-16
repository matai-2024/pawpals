// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, expect } from 'vitest'
import { renderApp } from './__tests__/test-setup.tsx'
import nock from 'nock'
import { waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

const MOCK_EVENTS = [
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

describe('EventList.tsx', () => {
  it.only('Should display a list of events', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, MOCK_EVENTS)

    const scope2 = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, MOCK_EVENTS)

    const screen = renderApp('/events')

    await waitForElementToBeRemoved(() => screen.getByTestId(/load/i))
    const eventTitle = await screen.findByTestId('title')
    expect(eventTitle).toBeInTheDocument()
    expect(eventTitle.textContent).toBe('Pet-friendly Events')
    expect(scope.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
  })
})
