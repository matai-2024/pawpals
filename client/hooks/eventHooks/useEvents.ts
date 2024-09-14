import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../apis/apiClientEvents'

export default function useEvents() {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })
  return { ...query }
}
