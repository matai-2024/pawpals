import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Pet } from '../../models/forms'

export default function usePetList() {
  return useQuery({
    queryKey: ['pets'],
    queryFn: async () => {
      const res = await request.get(`api/v1/pets`)
      return res.body
    },
  })
}
