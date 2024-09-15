import { useQuery } from '@tanstack/react-query'
import { getEventsByPetId } from '../../apis/apiClientEvents'

export default function useEventsByPetId(id: number) {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: () => getEventsByPetId(id),
  })
  return { ...query }
}
