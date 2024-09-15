import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { upsertProfile } from '../apis/apiClientOwners'
import { Owner, OwnerData } from '../../models/forms'

function useOwner() {
  // const navigate = useNavigate()
  // const { user, getAccessTokenSilently } = useAuth0()

  // const queryClient = useQueryClient()
  // const { data, isLoading } = useQuery({
  //   queryKey: ['user'],
  //   queryFn: async () => {
  //     const accessToken = await getAccessTokenSilently()
  //     if (user && user.sub) {
  //       const response = await getUser(accessToken)
  //       return response
  //     }
  //   },
  // })
  const { getAccessTokenSilently } = useAuth0()
  const token = getAccessTokenSilently()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (
      data
    : {
      form: OwnerData | Owner
    }) => upsertProfile(data, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['owners'] })
    },
  })

  return { mutation }
}