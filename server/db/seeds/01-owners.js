export const addOwners = [
  {
    id: 1,
    first_name: 'Anahera',
    last_name: 'Foley-Paama',
    email: 'anahera@email.com',
  },
  {
    id: 2,
    first_name: 'Jack',
    last_name: 'Gloyer',
    email: 'jack@email.com',
  },
  {
    id: 3,
    first_name: 'Amy',
    last_name: 'Jackson',
    email: 'amy@email.com',
  },
  {
    id: 4,
    first_name: 'Dean',
    last_name: 'Tunbridge',
    email: 'dean@email.com',
  },
  {
    id: 5,
    first_name: 'Sam',
    last_name: 'Pederson',
    email: 'sam@email.com',
  },
  {
    id: 6,
    first_name: 'Logan',
    last_name: 'Bennett',
    email: 'logan@email.com',
  },
  {
    id: 7,
    first_name: 'Alicia',
    last_name: 'Tavita',
    email: 'alicia@email.com',
  },
  {
    id: 8,
    first_name: 'Elias',
    last_name: 'Kaleta',
    email: 'elias@email.com',
  },
  {
    id: 9,
    first_name: 'Ryan',
    last_name: 'Zhao',
    email: 'ryan@email.com',
  },
  {
    id: 10,
    first_name: 'Emma',
    last_name: 'Johnson',
    email: 'emma.johnson@email.com',
  },
  {
    id: 11,
    first_name: 'Liam',
    last_name: 'Smith',
    email: 'liam.smith@email.com',
  },
  {
    id: 12,
    first_name: 'Olivia',
    last_name: 'Williams',
    email: 'olivia.williams@email.com',
  },
  {
    id: 13,
    first_name: 'Noah',
    last_name: 'Brown',
    email: 'noah.brown@email.com',
  },
  {
    id: 14,
    first_name: 'Ava',
    last_name: 'Davis',
    email: 'ava.davis@email.com',
  },
  {
    id: 15,
    first_name: 'Ethan',
    last_name: 'Miller',
    email: 'ethan.miller@email.com',
  },
]

export async function seed(knex) {
  await knex('owners').insert(addOwners)
}
