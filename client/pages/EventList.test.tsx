// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, expect } from 'vitest'
import { renderApp } from './__tests__/test-setup.tsx'
import nock from 'nock'
import { waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
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
const mockAttendees = [
  {
    id: 1,
    eventId: 1,
    accountId: 3,
    petId: 3,
  },
  {
    id: 2,
    eventId: 1,
    accountId: 7,
    petId: 9,
  },
  {
    id: 3,
    eventId: 1,
    accountId: 9,
    petId: 11,
  },
  {
    id: 4,
    eventId: 1,
    accountId: 12,
    petId: 14,
  },
  {
    id: 5,
    eventId: 1,
    accountId: 4,
    petId: 5,
  },
  {
    id: 6,
    eventId: 1,
    accountId: 6,
    petId: 8,
  },
  {
    id: 7,
    eventId: 1,
    accountId: 14,
    petId: 16,
  },
  {
    id: 8,
    eventId: 1,
    accountId: 1,
    petId: 1,
  },
  {
    id: 9,
    eventId: 1,
    accountId: 11,
    petId: 13,
  },
  {
    id: 10,
    eventId: 1,
    accountId: 2,
    petId: 2,
  },
  {
    id: 11,
    eventId: 2,
    accountId: 8,
    petId: 10,
  },
  {
    id: 12,
    eventId: 2,
    accountId: 5,
    petId: 7,
  },
  {
    id: 13,
    eventId: 2,
    accountId: 13,
    petId: 15,
  },
  {
    id: 14,
    eventId: 3,
    accountId: 15,
    petId: 17,
  },
  {
    id: 15,
    eventId: 3,
    accountId: 10,
    petId: 12,
  },
  {
    id: 16,
    eventId: 3,
    accountId: 4,
    petId: 6,
  },
  {
    id: 17,
    eventId: 4,
    accountId: 9,
    petId: 11,
  },
  {
    id: 18,
    eventId: 5,
    accountId: 7,
    petId: 9,
  },
  {
    id: 19,
    eventId: 6,
    accountId: 6,
    petId: 8,
  },
  {
    id: 20,
    eventId: 7,
    accountId: 2,
    petId: 2,
  },
  {
    id: 21,
    eventId: 8,
    accountId: 11,
    petId: 15,
  },
  {
    id: 22,
    eventId: 9,
    accountId: 3,
    petId: 4,
  },
  {
    id: 23,
    eventId: 10,
    accountId: 15,
    petId: 17,
  },
  {
    id: 24,
    eventId: 10,
    accountId: 1,
    petId: 1,
  },
  {
    id: 25,
    eventId: 10,
    accountId: 5,
    petId: 7,
  },
  {
    id: 26,
    eventId: 10,
    accountId: 8,
    petId: 12,
  },
  {
    id: 27,
    eventId: 10,
    accountId: 4,
    petId: 6,
  },
  {
    id: 28,
    eventId: 10,
    accountId: 9,
    petId: 11,
  },
  {
    id: 29,
    eventId: 10,
    accountId: 12,
    petId: 14,
  },
  {
    id: 30,
    eventId: 10,
    accountId: 7,
    petId: 9,
  },
  {
    id: 31,
    eventId: 10,
    accountId: 13,
    petId: 15,
  },
]

describe('EventList.tsx', () => {
  it('Should display a list of events', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, mockEvents)

    const scope2 = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, mockEvents)

    const scope3 = nock('http://localhost')
      .get('/api/v1/attendees')
      .reply(200, mockAttendees)
    const screen = renderApp('/events')

    await waitForElementToBeRemoved(() => screen.getByTestId(/load/i))
    const eventTestTitle = await screen.findByTestId('title')
    expect(eventTestTitle).toBeInTheDocument()
    expect(eventTestTitle.textContent).toBe('Pet-friendly Events')

    const eventTitle = await screen.findByText('Food Truck Night in Howick')

    expect(eventTitle).toBeVisible()
    expect(scope.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
    expect(scope3.isDone()).toBe(true)
  })
})

describe('EventList.tsx', () => {
  it('should display the correct amount of events', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, mockEvents)

    const scope2 = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, mockEvents)

    const scope3 = nock('http://localhost')
      .get('/api/v1/attendees')
      .reply(200, mockAttendees)
    const screen = renderApp('/events')
    const EventId = await screen.findAllByTestId('event-card')
    expect(EventId).toHaveLength(mockEvents.length)
    expect(scope.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
    expect(scope3.isDone()).toBe(true)
  })
})
