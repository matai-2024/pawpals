import { useMutation, useQueryClient } from '@tanstack/react-query'
import { delEvent } from '../../apis/apiClientEvents'
import { useParams } from 'react-router-dom'

export default function useDelEvent() {
  const queryClient = useQueryClient()
  const id = Number(useParams())

  return useMutation({
    mutationFn: async () => delEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
}
