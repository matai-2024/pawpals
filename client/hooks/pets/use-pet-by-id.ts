import { useQuery } from '@tanstack/react-query'
import { fetchPetById } from '../../apis/apiClientPets.ts'

export default function usePetById(id: number) {
  const query = useQuery({
    queryKey: ['pets', id],
    queryFn: () => fetchPetById(id),
  })
  return { ...query }
}
