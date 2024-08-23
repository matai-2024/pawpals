export interface PetData {
  petName: string
  dateofBirth: string
  sex: string
  breed: string
  species: string
  bio: string
  faveFood: string
  traits: string
  busy: string
  lazy: string
  goofy: string
  gorgeous: string
  brat: string
  loyal: string
  playful: string
  adventurous: string
  foodie: string
  snorer: string
  crazy: string
  floofy: string
}

export interface Pet extends PetData {
  id: number
}