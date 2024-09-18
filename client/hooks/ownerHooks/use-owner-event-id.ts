import { useQuery } from '@tanstack/react-query'
import { getOwnerByEventId } from '../../apis/apiClientOwners.ts'

export default function useOwnerByPetId(id: number) {
  const query = useQuery({
    queryKey: ['owners'],
    queryFn: () => getOwnerByEventId(Number(id)),
  })
  return { ...query }
}
