// PetCard.tsx

import { Link } from 'react-router-dom'

interface PetCardProps {
  id?: number
  petName: string
  image: string
}

const PetCard: React.FC<PetCardProps> = ({ id, petName, image }) => (
  <div className="flex flex-row items-center gap-6 border w-full p-3 rounded-lg shadow-md ease-in-out duration-200">
    <div className="w-24 h-24 rounded-full overflow-hidden">
      <img
        src={`pets/${image}`}
        alt={petName}
        className="object-cover -top-8"
      />
    </div>
    <div className="flex lg:flex-col gap-3">
      <h2 className="flex font-semibold text-xl">{petName}</h2>
      <div className="flex flex-col lg:flex-row space-x-6 mt-2">
        <Link to={`/profiles/${id}`} onClick={() => window.scroll(0, 0)}>
          <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>View Profile</span>
          </button>
        </Link>
        <Link to={`/profiles/${id}/edit`} onClick={() => window.scroll(0, 0)}>
          <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
            <i className="fa-regular fa-pen-to-square"></i>
            <span>Edit Profile</span>
          </button>
        </Link>
        <button className="text-sm text-gray-500 hover:text-red-700 flex items-center space-x-2">
          <i className="fa-solid fa-trash"></i>
          <span>Delete Profile</span>
        </button>
      </div>
    </div>
  </div>
)

export default PetCard
