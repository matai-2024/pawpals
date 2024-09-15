import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../apis/apiClientEvents'

export default function useFetchEvents() {
  return useQuery({
    queryFn: fetchEvents,
    queryKey: ['events'],
  })
}
