import { useQuery } from '@tanstack/react-query'
import { fetchAttendeesByEventId } from '../../apis/apiClientAttendees'

export default function useAttendeeByEventId(id: number) {
  const query = useQuery({
    queryKey: ['attendees', id],
    queryFn: () => fetchAttendeesByEventId(id),
  })
  return { ...query }
}