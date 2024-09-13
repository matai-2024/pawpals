export interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  creatorId: number
  eventImage: string
  eventWebsite: string
}
export interface EventId extends Event {
  id: number
}
