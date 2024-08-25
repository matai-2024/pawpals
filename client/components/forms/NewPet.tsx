import { useNavigate } from 'react-router-dom'
import { useCreatePet } from '../../hooks/api.ts'
import { PetData } from '../../../models/forms.ts'


export default function NewPet() {
  const createPet = useCreatePet()
  const navigate = useNavigate()

  const handleSubmit = async (data: PetData) => {
    await createPet.mutateAsync(data)
    navigate(`/profile/${data.petName}`)
  }

  return (
    <>
      <h2>New Event</h2>
    </>
  )
}