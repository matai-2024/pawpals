import { ReactNode } from 'react'

export interface FormData {
  firstName: string
  lastName: string
  email: string
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

export interface Form extends FormData {
  id: number
  ownerId: number
}

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

export interface PetFormProps extends PetProfileData {
  updateFields: (fields: Partial<PetProfileData>) => void
}

export interface PetProfile extends PetProfileData {
  id: number
}

export interface Names {
  firstName: string
  lastName: string
}

export interface OwnerData extends Names {
  email: string
}

export interface OwnerFormProps extends OwnerData {
  updateFields: (fields: Partial<OwnerData>) => void
}

export interface Owner extends OwnerData {
  id: number
  externalKey: string
}

// Form inputs
export interface FormInput {
  'Pet name': UndefinedArr
  'Date of birth': UndefinedArr
  Gender: DefinedArr
  Breed: UndefinedArr
  Species: UndefinedArr
  Bio: UndefinedArr
  'Favourite food': UndefinedArr
  Traits: DefinedArr
}

export interface UndefinedArr {
  type: string
  name: string
  placeholder?: string
  options?: Array<number | string>
}

export interface DefinedArr {
  type: string
  name: string
  placeholder?: string
  options: string[]
}

export interface FormWrapperProps {
  title: string
  children: ReactNode
}

// TODO: Could do with an audit of all interfaces and types in this list
