import { useQuery } from '@tanstack/react-query'
import { getPets } from '../apis/apiClientPets'

export default function usePetList() {
  const query = useQuery({
    queryKey: ['pets'],
    queryFn: getPets,
  })
  return query
}
