import { useQuery } from '@tanstack/react-query'
import { getEvents } from '../../apis/apiClientEvents'
import { useAuth0 } from '@auth0/auth0-react'

export default function useEvents() {
  const { getAccessTokenSilently } = useAuth0()

  const query = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const res = await getEvents(accessToken)

      return res
    },
  })
  return query
}
