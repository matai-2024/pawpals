import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { upsertProfile } from '../apis/apiClientOwners'
import { getOwnerByExternalId } from '../apis/apiClientOwners'

export function useUpsertOwner() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['owners'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        console.log('Hook - GET OWNER BY EXTERNAL KEY')
        const response = await getOwnerByExternalId(token)
        console.log('Hook RETURNED: ',response)
        return response
      }
    },
  })

  const mutation = useMutation({
    mutationFn: async () => {
      console.log('hook upsert')
      const token = await getAccessTokenSilently()
      return upsertProfile(token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['owners'] })
    },
  })

  return { data, isLoading, mutation }
}