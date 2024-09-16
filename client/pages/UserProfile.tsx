import OwnerForm from '../components/forms/OwnerForm'

export default function UserProfile() {
  const data = {
    firstName: '',
    lastName: '',
  }
  return <OwnerForm firstName={data.firstName} lastName={data.lastName} />
}
