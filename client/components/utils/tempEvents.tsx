import { Event } from '../../../models/events'

export const Events: Event[] = [
  {
    id: 1,
    title: 'Grandpas birthday',
    date: '16-06-2024',
    time: '1pm-2pm',
    location: 'Mission Bay',
    description: 'Grandpa is having a birthday bbq',
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
    audience: 'my friends only',
    creatorId: 1,
  },
  {
    id: 2,
    title: 'New year party',
    date: '01-01-2025',
    time: '1pm-2pm',
    location: 'Grey Lynn',
    description: 'Happy new year',
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
    audience: 'anyone!',
    creatorId: 5,
  },
  {
    id: 3,
    title: 'Obi is having a birthday party',
    date: '20-10-2024',
    time: '1pm-2pm',
    location: 'Waiheke',
    description: 'Obis birthday party',
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
    audience: 'my friends only',
    creatorId: 1,
  },
  {
    id: 4,
    title: 'Mutual friends coffee meetup',
    date: '28-09-2024',
    time: '1pm-2pm',
    location: 'Newmarket',
    description:
      'Mutual friends cafe are having a bring your pet event yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    eventImage: 'img/img',
    eventWebsite: 'www.website.com/website',
    audience: 'anyone!',
    creatorId: 3,
  },
]

export default Events
