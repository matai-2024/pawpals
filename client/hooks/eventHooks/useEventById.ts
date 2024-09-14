import { useQuery } from '@tanstack/react-query'
import { getEventById } from '../../apis/apiClientEvents'
import { useAuth0 } from '@auth0/auth0-react'

export default function useEventById(id: number) {
  const { getAccessTokenSilently } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['events', id],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const res = await getEventById(id, accessToken)

      return res
    },
  })

  return { data, isLoading, isError }
}
