//Below is a half-implemented useMutation that doesn't seem to be in use; I am keeping it just in case
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import request from 'superagent'

// export default function useEditPet(id: number) {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: async (values: Event, token: string) => {
//       await request.patch(`/api/v1/pets/${id}`).send(values)
//     },
//     onSuccess: async () => {
//       queryClient.invalidateQueries({ queryKey: ['pet', id] })
//     },
//   })
// }
