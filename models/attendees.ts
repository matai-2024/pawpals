import { PetProfile } from './forms'

export interface AttendeeData {
  eventId: number
  accountId: number
  petId: number
}

export interface Attendee extends AttendeeData {
  id: number
}

export interface AttendeePet extends Attendee, PetProfile {}
