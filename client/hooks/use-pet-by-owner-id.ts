import { useQuery } from '@tanstack/react-query'
import { fetchPetsByOwnerId } from '../apis/apiClientPets.ts'

export default function usePetById(id: number) {
  const query = useQuery({
    queryKey: ['pets', id],
    queryFn: () => fetchPetsByOwnerId(id),
  })
  return { ...query }
}
