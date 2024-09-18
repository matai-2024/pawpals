import { useQuery } from '@tanstack/react-query'
import { fetchEventsByExtKey } from '../../apis/apiClientEvents'

export default function useEventsByExtKey(extKey: string) {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEventsByExtKey(extKey),
  })
  return { ...query }
}
