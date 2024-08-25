import { useParams } from 'react-router-dom'
import { usePetData } from '../hooks/api.ts'

export default function Profile() {
  const { id } = useParams()
  const { data, isPending, isError, error } = usePetData(Number(id))

  console.log(id)

  if (isPending)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  if (isError)
    return (
      <div>
        <h3>Error loading pet data: </h3>
        {String(error)}
      </div>
    )

  console.log(data)

  return (
    <div className="container">
      <h1>My name is {data.petName} 👋</h1>
      <div className="flex flex-row gap-x-3 my-3">
        <p>Date of birth: {data.dateofBirth}</p>
        <p>{data.sex}</p>
        <p>{data.breed}</p>
      </div>
      <div className='my-3'>
        <h3>Traits</h3>
        <div className="flex flex-row gap-x-3">
          {data.busy === "on" ? <p>Busy</p> : ""}
          {data.lazy === "on" ? <p>Lazy</p> : ""}
          {data.goofy === "on" ? <p>Goofy</p> : ""}
          {data.gorgeous === "on" ? <p>Gorgeous</p> : ""}
          {data.brat === "on" ? <p>Brat</p> : ""}
          {data.loyal === "on" ? <p>Loyal</p> : ""}
          {data.playful === "on" ? <p>Playful</p> : ""}
          {data.adventurous === "on" ? <p>Adventurous</p> : ""}
          {data.foodie === "on" ? <p>Foodie</p> : ""}
          {data.snorer === "on" ? <p>Snorer</p> : ""}
          {data.crazy === "on" ? <p>Crazy</p> : ""}
          {data.floofy === "on" ? <p>Floofy</p> : ""}
                </div>
        </div>
      <p>{data.bio}</p>
      <p>{data.faveFood}</p>
    </div>
  )
}

// TODO: update data selectors from snake case to camel case