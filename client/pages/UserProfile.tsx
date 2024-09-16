import { useAuth0 } from '@auth0/auth0-react'
import OwnerForm from '../components/forms/OwnerForm'
import useOwnerProfile from '../hooks/ownerHooks/use-create-owner-profile'
import { CreateOwnerData } from '../../models/forms'

export default function UserProfile() {
  const { getAccessTokenSilently } = useAuth0()
  const { mutation } = useOwnerProfile()

  async function controlSubmit(form: CreateOwnerData) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
  }

  const data = {
    firstName: '',
    lastName: '',
    email: '',
  }
  return (
    <OwnerForm
      firstName={data.firstName}
      lastName={data.lastName}
      email={data.email}
      controlSubmit={controlSubmit}
    />
  )
}
