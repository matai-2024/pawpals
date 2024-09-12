export interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  creatorId: number
}
export interface EventId extends Event {
  id: number
}
