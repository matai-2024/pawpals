export interface PetData {
  ownerId: number
  petName: string
  image: string
  dateOfBirth: string
  gender: string
  breed: string
  species: string
  bio: string
  trait_id: number
}

export interface Pet extends PetData {
  id: number
}

export interface TraitData {
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

export interface Trait extends TraitData {
  id: number
}

export interface PetProfileData {
  ownerId: number
  petName: string
  image: string
  dateOfBirth: string
  gender: string
  breed: string
  species: string
  bio: string
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

export interface PetProfile extends PetProfileData {
  id: number
}

export interface OwnerData {
  firstName: string
  lastName: string
  email: string
}

export interface Owner extends OwnerData {
  id: number
}

// Form inputs
export interface FormInput {
  "Pet name":       UndefinedArr;
  "Date of birth":  UndefinedArr;
  Gender:              DefinedArr;
  Breed:            UndefinedArr;
  Species:          UndefinedArr;
  Bio:              UndefinedArr;
  "Favourite food": UndefinedArr;
  Traits:           DefinedArr;
}

export interface UndefinedArr {
  type:        string;
  name:        string;
  placeholder?: string;
  options?:     Array<number | string>;
}

export interface DefinedArr {
  type:        string;
  name:        string;
  placeholder?: string;
  options:     string[];
}
