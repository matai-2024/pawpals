import { useQuery } from '@tanstack/react-query'
import { fetchAttendees } from '../apis/apiClientAttendees'

export default function useAttendees() {
  const query = useQuery({
    queryKey: ['attendees'],
    queryFn: fetchAttendees,
  })
  return { ...query }
}
