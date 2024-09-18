// Pet Hooks
export { default as usePets } from './pets/use-pets.ts'
export { default as usePetById } from './pets/use-pet-by-id.ts'
export { default as usePetList } from './pets/use-pet-list.ts'
export { default as useCreatePet } from './pets/use-pet-create.ts'
export { default as usePetByOwnerId } from './pets/use-pet-by-owner-id.ts'

// Owner Hooks
export { default as useOwnerByEventId } from './ownerHooks/use-owner-event-id.ts'
export { default as useOwnerByPetId } from './ownerHooks/user-owner-pet-id.ts'

// Event Hooks
export { default as useEventsByPetId } from './eventHooks/use-events-pet-id.ts'

// Attendee Hooks
export { default as useAttendeeByEventId } from './attendeeHooks/use-attendees-event-id.ts'

// Util Hooks
export { default as useMultistepForm } from './use-multistep-form.ts'

// TODO:
// delete pets
// update the edit pets api client function and hook
