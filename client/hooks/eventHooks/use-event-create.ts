import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEvent } from '../../apis/apiClientEvents'
import { EventData } from '../../../models/events'

interface Props {
  data: EventData
  token: string
}

export default function useCreateEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: Props) => {
      // eslint-disable-next-line no-console
      console.log('mutation data', data)

      const id = addEvent(data, token)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
}
