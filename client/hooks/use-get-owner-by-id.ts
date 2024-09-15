import { useQuery } from '@tanstack/react-query'
import { fetchOwnerById } from '../apis/apiClientOwners.ts'
import { useAuth0 } from '@auth0/auth0-react'

export default function useOwnerById(id: number) {
  const { getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['owner', id],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return fetchOwnerById(id, token)},
  })
  return { ...query }
}
