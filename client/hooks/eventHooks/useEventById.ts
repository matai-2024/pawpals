import { useQuery } from '@tanstack/react-query'
import { getEventById } from '../../apis/apiClientEvents'

export default function useEventById(id: number) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventById(id),
  })
}
