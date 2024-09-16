import { useMutation, useQueryClient } from '@tanstack/react-query'
import { delEvent } from '../../apis/apiClientEvents'

export default function useDelEvent() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: delEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
}
