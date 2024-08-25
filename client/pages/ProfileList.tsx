import { Link } from 'react-router-dom'
import { usePetList } from '../hooks/api.ts'
import { Pet } from '../../models/forms.ts';


export default function ProfileList() {
  const { data, isPending, isError, error } = usePetList()
  console.log(data);
  

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
      <h1>Profile List</h1>
      {data.map((profile: Pet, index: number) => (
        <div key='profile-list' className="my-4">
          <Link to={`/profiles/${profile.id}`}>Pet name {index + 1} {profile.petName}</Link>
        </div>
      ))}
    </div>
  )
}

// TODO: update data selectors from snake case to camel case