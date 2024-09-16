import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { createOwner, getOwnerInfo } from '../../apis/apiClientOwners'
import { CreateOwnerData } from '../../../models/forms'

function useOwnerProfile() {
  const navigate = useNavigate()
  // const { user, getAccessTokenSilently } = useAuth0()

  // const queryClient = useQueryClient()
  // const { data, isLoading } = useQuery({
  //   queryKey: ['owner'],
  //   queryFn: async () => {
  //     const accessToken = await getAccessTokenSilently()
  //     if (user && user.sub) {
  //       const response = await getOwnerInfo(accessToken)
  //       return response
  //     }
  //   },
  // })

  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: CreateOwnerData; token: string }) =>
      createOwner(form, token),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['owner'] })
      navigate('/dashboard')
    },
  })

  return { mutation }
}

export default useOwnerProfile
