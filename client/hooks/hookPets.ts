import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addPet,
  fetchPetById,
  fetchPets,
  fetchPetsByOwnerId,
} from '../apis/apiClientPets.ts'
import { PetData } from '../../models/forms.ts'

// get all
export function usePets() {
  const query = useQuery({
    queryKey: ['pets'],
    queryFn: fetchPets,
  })
  return { ...query }
}

// get by id
export function usePetById(id: number) {
  const query = useQuery({
    queryKey: ['pets', id],
    queryFn: () => fetchPetById(id),
  })
  return { ...query }
}

// get by owner id
export function usePetsByOwnerId(id: number) {
  const query = useQuery({
    queryKey: ['owner', id],
    queryFn: () => fetchPetsByOwnerId(id),
  })
  return { ...query }
}

// pt1 mutation hook
// export function usePetMutation(mutationFn: MutationFunction) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['pets'] })
//     },
//   })
//   return mutation
// }

// add pet
export function useCreatePet() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newPet: PetData) => {
      const id = addPet(newPet)
      console.log('newpet',id)

      return id
    },
    onSuccess: () => {
      console.log('successful mutation!')
      queryClient.invalidateQueries({ queryKey: ['pets'] })
    },
  })
}

// TODO
// delete by id
// add
// update
