import { useQuery } from '@tanstack/react-query'
import { fetchPets } from '../apis/apiClientPets.ts'

export default function usePets() {
  const query = useQuery({
    queryKey: ['pets'],
    queryFn: fetchPets,
  })
  return { ...query }
}
