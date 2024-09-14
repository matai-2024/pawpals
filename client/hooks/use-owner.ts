import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { getOwner, upsertOwner } from "../apis/apiClientOwners"
import { Owner, OwnerData } from "../../models/forms"

function useOwner() {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getOwner(accessToken)
        return response
      }
    },
  })

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: OwnerData | Owner
      token: string
    }) => upsertOwner(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['owner'] })
      navigate('/my-songs')
    },
  })

  return { data, isLoading, mutation }
}

export default useOwner