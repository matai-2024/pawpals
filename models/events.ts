export interface Event {
  title: string
  date: string
  location: string
  description: string
  creatorId: number
}
export interface EventId extends Event {
  id: number
}
