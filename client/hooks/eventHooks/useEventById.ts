import { useQuery } from '@tanstack/react-query'
import { getEventById } from '../../apis/apiClientEvents'
import { useAuth0 } from '@auth0/auth0-react'
import { Event } from '../../../models/events'

export default function useEventById(id: number) {
  const { getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const res = await getEventById(id, accessToken)
      return res as Event
    },
  })
}
