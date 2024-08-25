import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { PetData } from '../../models/forms'

export default function useCreateEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: PetData) => {
      (await request.post(`/api/v1/pets`)).setEncoding(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['profile']})
    }
  })
}