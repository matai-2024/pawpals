import { useQuery } from '@tanstack/react-query'
import { fetchPetsByOwnerId } from '../apis/apiClientPets.ts'

export default function usePetByOwnerId(ownerId: string) {
  const query = useQuery({
    queryKey: ['pets', ownerId],
    queryFn: () => fetchPetsByOwnerId(ownerId),
  })
  return { ...query }
}
