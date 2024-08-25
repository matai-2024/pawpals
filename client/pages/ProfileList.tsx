import { Link } from 'react-router-dom'
import { usePetList } from '../hooks/api.ts'
import { Pet } from '../../models/forms.ts'

export default function ProfileList() {
  const { data, isPending, isError, error } = usePetList()

  if (isPending)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  if (isError)
    return (
      <div>
        <h3>Error loading pet list: </h3>
        {String(error)}
      </div>
    )

  return (
    <div className="container">
      <h1 className='text-2xl my-3'>Profile List</h1>
      <div className="flex flex-col gap-3">
      {data.map((profile: Pet) => (
          <Link key={profile.id} to={`/profiles/${profile.id}`}>
            Pet name {profile.id} {profile.petName}
          </Link>
      ))}
      </div>
    </div>
  )
}

// TODO: update data selectors from snake case to camel case
