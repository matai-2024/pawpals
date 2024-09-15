import { useMutation, useQueryClient } from '@tanstack/react-query'
import { delEvent } from '../../apis/apiClientEvents'

export default function useDeleteEvent() {
  const queryClient = useQueryClient()

  interface delEventTypes {
    id: number
    token: string
  }

  return useMutation({
    mutationFn: ({ id, token }: delEventTypes) => delEvent(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
}
