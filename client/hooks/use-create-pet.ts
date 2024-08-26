import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPet } from '../apis/pets'
import { PetData } from '../../models/forms'

export default function useCreatePet() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: PetData) => {
      const id = addPet(data)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] })
    },
  })
}
