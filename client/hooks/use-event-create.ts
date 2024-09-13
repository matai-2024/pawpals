import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEvent } from '../apis/apiClientEvents'

export default function useCreateEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: EventData) => {
      // eslint-disable-next-line no-console
      console.log('mutation data', data)

      const id = addEvent(data)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
}
