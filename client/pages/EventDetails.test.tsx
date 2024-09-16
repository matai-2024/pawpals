// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
import { beforeAll, describe, it, expect } from 'vitest'
import { renderApp } from './__tests__/test-setup.tsx'
import nock from 'nock'
import { waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  nock.disableNetConnect()
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

const MOCK_PETS = [
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

describe('EventDetails.tsx', () => {
  it('should display details about the event', async () => {
    const scope1 = nock('http://localhost')
      .get(`/api/v1/events/1`)
      .reply(200, MOCK_EVENT)

    const scope2 = nock('http://localhost')
      .get(`/api/v1/pets`)
      .reply(200, MOCK_PETS)

    const screen = renderApp(`/events/1`)
    await waitForElementToBeRemoved(() => screen.getByTestId(/load/i))
    const eventTitle = await screen.findByTestId('title')
    expect(eventTitle).toBeInTheDocument()
    expect(scope1.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
  })
})
