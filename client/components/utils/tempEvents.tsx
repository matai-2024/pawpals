import { EventId } from '../../../models/events'

export const Events: EventId[] = [
  {
    id: 1,
    title: 'Grandpas birthday',
    date: '16-06-2024',
    time: '1pm-2pm',
    location: 'Mission Bay',
    description: 'Grandpa is having a birthday bbq',
    creatorId: 1,
  },
  {
    id: 2,
    title: 'New year party',
    date: '01-01-2025',
    time: '1pm-2pm',
    location: 'Grey Lynn',
    description: 'Happy new year',
    creatorId: 5,
  },
  {
    id: 3,
    title: 'Obi is having a birthday party',
    date: '20-10-2024',
    time: '1pm-2pm',
    location: 'Waiheke',
    description: 'Obis birthday party',
    creatorId: 1,
  },
  {
    id: 4,
    title: 'Mutual friends coffee meetup',
    date: '28-09-2024',
    time: '1pm-2pm',
    location: 'Newmarket',
    description: 'Mutual friends cafe are having a bring your pet event',
    creatorId: 3,
  },
  {
    id: 5,
    title: 'My Iguana is missing',
    date: '26-09-2024',
    time: '1pm-2pm',
    location: 'North shore',
    description:
      'My pet iguana has escaped. Pleasse come to the park in birkenhead and help me look for him!',
    creatorId: 1,
  },
]

export default Events
