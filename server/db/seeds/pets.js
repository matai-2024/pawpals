export const addPets = [
  {
    id: 1,
    owner_id: 1,
    pet_name: "Pepper",
    dob: "2021-12-01",
    sex: "Female",
    breed: "Maltese",
    species: "Dog",
    bio: "I love long walks, belly rubs, and chasing after toys. I'm always up for an adventure, whether it's exploring the outdoors or snuggling on the couch. I bring joy and laughter to everyone I meet, and I'm the perfect partner in crime for any fun!",
    fave_food: "Everything!",
    traits: "",
    busy: "on",
    lazy: "",
    goofy: "",
    gorgeous: "on",
    brat: "on",
    loyal: "",
    playful: "on",
    adventurous: "on",
    foodie: "on",
    snorer: "",
    crazy: "on",
    floofy: "on",
  },
  {
    id: 2,
    owner_id: 2,
    pet_name: "Obie",
    dob: "2020-12-01",
    sex: "Male",
    breed: "Border Collie",
    species: "Dog",
    bio: "I love long walks, belly rubs, and chasing after toys. I'm always up for an adventure, whether it's exploring the outdoors or snuggling on the couch. I bring joy and laughter to everyone I meet, and I'm the perfect partner in crime for any fun!",
    fave_food: "Everything!",
    traits: "",
    busy: "on",
    lazy: "",
    goofy: "",
    gorgeous: "",
    brat: "",
    loyal: "on",
    playful: "on",
    adventurous: "on",
    foodie: "on",
    snorer: "",
    crazy: "",
    floofy: "",
  },
]

export async function seed(knex) {
  // Delete all the data
  await knex("pets").del()

  // Insert all the data
  await knex("pets").insert(addPets)
}
