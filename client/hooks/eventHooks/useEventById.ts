import { useQuery } from '@tanstack/react-query'
import { getEventById } from '../../apis/apiClientEvents'
import { Event } from '../../../models/events'

export default function useEventById(id: number) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventById(id),
  })
}
