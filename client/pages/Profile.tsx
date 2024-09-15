import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { usePetById } from '../hooks/hooks.ts'
import useOwnerById from '../hooks/use-get-owner-by-id.ts'

export default function Profile() {
  const { id } = useParams()
  const { data, isPending, isError, error } = usePetById(Number(id))
  const { data: owner, isPending: isLoading, isError: isErroring, error: err } = useOwnerById(Number(id))

  if (isPending || isLoading) return <LoadingSpinner />

  if (isError || isErroring)
    return (
      <div>
        <h3>Error loading pet data: </h3>
        {String(error || err)}
      </div>
    )
  
  console.log(owner)

  function getAge(dateString: string) {
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  console.log(data)
  return (
    <>
    <section className="flex-column align-middle my-20 w-full">
      <div className="flex flex-row gap-16">
      <img
      className="w-64 max-w-64 rounded-3xl"
      src={data.image ? `../../${data.image}` : `../../miso.jpg`}
      alt={data.petName}
      />
      <div className="flex-column">
        <h1 className="my-11 text-6xl font-bold text-black">
          {data.petName ? data.petName : 'Cutie Patootie'}
        </h1>
        <h2 className="text-2xl leading-8 text-gray-950">
          {getAge(data.dateOfBirth) > 1 || getAge(data.dateOfBirth) == 0
          ? `${getAge(data.dateOfBirth)}yrs old`
          : `${getAge(data.dateOfBirth)}yr old`}
          {data.gender
          ? `, ${data.gender}`
          : ``}
          {data.breed
          ? `, ${data.breed}`
          : ``}
        </h2>
          <div className="text-md text-gray-950 font-medium mt-6 flex flex-wrap items-center justify-start gap-2 lg:gap-3">
              {data.busy === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">Busy</span>
              ) : (
                ''
              )}
              {data.lazy === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">Lazy</span>
              ) : (
                ''
              )}
              {data.goofy === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Goofy
                </span>
              ) : (
                ''
              )}
              {data.gorgeous === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Gorgeous
                </span>
              ) : (
                ''
              )}
              {data.brat === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">Brat</span>
              ) : (
                ''
              )}
              {data.loyal === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Loyal
                </span>
              ) : (
                ''
              )}
              {data.playful === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Playful
                </span>
              ) : (
                ''
              )}
              {data.adventurous === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Adventurous
                </span>
              ) : (
                ''
              )}
              {data.foodie === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Foodie
                </span>
              ) : (
                ''
              )}
              {data.snorer === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Snorer
                </span>
              ) : (
                ''
              )}
              {data.crazy === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Crazy
                </span>
              ) : (
                ''
              )}
              {data.floofy === 'true' ? (
                <span className="bg-yellow-400 rounded-full py-1 px-3">
                  Floofy
                </span>
              ) : (
                ''
              )}
            </div>
            {/* Hardcode Profile Picture */}
            <div className="table mt-10 align-middle">
            <img 
              className="table-cell w-12 h-12 mr-3 rounded-full object-cover"
              src={data.image ? `../../${data.image}` : `../../miso.jpg`} 
              alt={`${owner.firstName} profile`}></img>
              <p className="table-cell align-middle text-2xl text-gray-800">{owner.firstName}</p>
            </div>
        </div>
      </div>
        <h3 className="mt-16 mx-auto mb-5 text-xl font-bold w-11/12">About me</h3>
        <p className="mx-auto w-11/12">{data.bio
          ? data.bio
          : `I don't have a description yet, but don't I look cute?`}</p>
    </section>
    </>
  )
}
