import {
  // MutationFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
// import request from 'superagent'
import { addPet } from '../apis/pets'
import { PetData } from '../../models/forms'
// import { PetData } from '../../models/forms'

// TODO get this function working with the PetForm
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

// export function usePets() {
//   const query = useQuery({ queryKey: []})
// }

// export function usePetsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>,
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['pets'] })
//     },
//   })
//   return mutation
// }
