export interface EventData {
  title: string
  date: string
  time: string
  location: string
  description: string
  eventImage: string
  eventWebsite: string
  audience: string
  creatorId: number
}
export interface Event extends EventData {
  id: number
}
