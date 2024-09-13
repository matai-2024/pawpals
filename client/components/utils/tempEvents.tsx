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
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
  },
  {
    id: 2,
    title: 'New year party',
    date: '01-01-2025',
    time: '1pm-2pm',
    location: 'Grey Lynn',
    description: 'Happy new year',
    creatorId: 5,
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
  },
  {
    id: 3,
    title: 'Obi is having a birthday party',
    date: '20-10-2024',
    time: '1pm-2pm',
    location: 'Waiheke',
    description: 'Obis birthday party',
    creatorId: 1,
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
  },
  {
    id: 4,
    title: 'Mutual friends coffee meetup',
    date: '28-09-2024',
    time: '1pm-2pm',
    location: 'Newmarket',
    description:
      'Mutual friends cafe are having a bring your pet event yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    creatorId: 3,
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
  },
]

export default Events
