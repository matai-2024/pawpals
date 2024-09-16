import { useQuery } from '@tanstack/react-query'
import { getOwnerByPetId } from '../../apis/apiClientOwners.ts'

export default function useOwnerByPetId(id: number) {
  const query = useQuery({
    queryKey: ['owner'],
    queryFn: () => //some function
  })
  return { ...query }
}
