export const addPets = [
  {
    id: 1,
    owner_id: 1,
    pet_name: 'Pepper',
    image: 'pepper.JPG',
    dob: '2021-12-01',
    gender: 'Girlie pop',
    breed: 'Maltese',
    species: 'Dog',
    bio: "I love long walks, belly rubs, and chasing after toys. I'm always up for an adventure, whether it's exploring the outdoors or snuggling on the couch. I bring joy and laughter to everyone I meet, and I'm the perfect partner in crime for any fun!",
    fave_food: 'Everything!',
    traits: '',
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
    owner_id: 2,
    pet_name: 'Obi',
    image: 'obi.png',
    dob: '2021-02-07',
    gender: 'Boy',
    breed: 'Border Collie',
    species: 'Dog',
    bio: "I love long walks, belly rubs, and chasing after toys. I'm always up for an adventure, whether it's exploring the outdoors or snuggling on the couch. I bring joy and laughter to everyone I meet, and I'm the perfect partner in crime for any fun!",
    fave_food: 'Everything!',
    traits: '',
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
  await knex('pets').del()

  // Insert all the data
  await knex('pets').insert(addPets)
}
