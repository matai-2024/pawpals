import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { createOwner } from '../../apis/apiClientOwners'
import { CreateOwnerData } from '../../../models/forms'

function useOwnerProfile() {
  const navigate = useNavigate()

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
