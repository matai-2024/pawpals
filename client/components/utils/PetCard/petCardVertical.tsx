import { Link } from 'react-router-dom'
import { getAge } from '../Presentation'
import { PetProfile } from '../../../../models/forms'

interface PetCardVerticalProps {
  id: number
  petName: string
  image: string
  dateOfBirth: string
  breed: string
  species: string
  search: PetProfile[] | undefined
}

export const PetCardVertical: React.FC<PetCardVerticalProps> = ({
  id,
  image,
  petName,
  dateOfBirth,
  breed,
}) => {
  return (
    <Link to={`${id}`}>
      <div
        data-testid="pet-card-vert"
        className="opacity-90 px-6 pt-8 pb-10 bg-white shadow-lg  border border-gray-100 rounded-lg flex flex-col gap-6 ease-in-out duration-200"
      >
        <div className="relative w-36 h-36 rounded-full shadow-2xl overflow-hidden border-gray-100">
          <img
            className="object-cover relative -top-7 "
            src={image}
            alt={petName}
          />
        </div>
        <div className="h-28 flex-col gap-2 flex">
          <p className="text-sm text-gray-800 font-semibold">
            {getAge(dateOfBirth) > 1
              ? `${getAge(dateOfBirth)}yrs, ${breed}`
              : `${getAge(dateOfBirth)}yr, ${breed}`}
          </p>

          <div>
            <h3 className="text-2xl text-gray-950 font-bold pb-4">{petName}</h3>
          </div>

          <div className="opacity-100 shadow-lg hover:bg-yellow-500 ease-in-out duration-200 text-center rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
            View profile <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PetCardVertical
