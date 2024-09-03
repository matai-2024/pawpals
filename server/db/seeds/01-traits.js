export const addTraits = [
  {
    id: 1,
    pet_id: 1,
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
  },
  {
    id: 2,
    pet_id: 2,
    busy: 'on',
    lazy: '',
    goofy: 'on',
    gorgeous: '',
    brat: '',
    loyal: '',
    playful: 'on',
    adventurous: 'on',
    foodie: '',
    snorer: '',
    crazy: '',
    floofy: 'on',
  },
]

export async function seed(knex) {
  // Delete all the data
  await knex('traits').del()

  // Insert all the data
  await knex('traits').insert(addTraits)
}
