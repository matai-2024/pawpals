import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPet } from '../apis/apiClientPets.ts'
import { PetProfileData } from '../../models/forms.ts'

export default function useCreatePet() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: PetProfileData) => {
      console.log('mutation data', data)

      const id = addPet(data)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] })
    },
  })
}
