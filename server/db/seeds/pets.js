export const addPets = [
  {
    id: 1,
    owner_id: 1,
    pet_name: 'Pepper',
    image:
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image:
      'https://cdn.discordapp.com/attachments/1275340423728205825/1277488195826880634/20240624_145933.png?ex=66cd5918&is=66cc0798&hm=d51c3a6f242be5d36ffa5bc8855a0587283a16a53c1ad56d6dc16209c7619bff&',
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
