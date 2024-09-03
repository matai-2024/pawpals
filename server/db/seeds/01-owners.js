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
    first_name: 'Logan',
    last_name: 'Bennett',
    email: 'logan@email.com',
  },
  {
    id: 5,
    first_name: 'Alicia',
    last_name: 'Tavita',
    email: 'alicia@email.com',
  },
]

export async function seed(knex) {
  await knex('owners').insert(addOwners)
}
