import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPet } from '../apis/apiClientPets.ts'
import { PetProfileDataInit } from '../../models/forms.ts'

interface Props {
  data: PetProfileDataInit
  token: string
}

export default function useCreatePet() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: Props) => {
      // eslint-disable-next-line no-console
      console.log('mutation data', data)

      const id = addPet(data, token)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] })
    },
  })
}
