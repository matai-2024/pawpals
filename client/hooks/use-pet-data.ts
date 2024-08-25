import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Pet } from '../../models/forms'

export default function usePetData(id: number) {
  return useQuery({
    queryKey: ['pet', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/pets/${id}`)
      return res.body as Pet
    },
  })
}
