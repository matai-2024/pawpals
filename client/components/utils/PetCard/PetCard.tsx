// PetCard.tsx

interface PetCardProps {
  petName: string
  image: string
}

const PetCard: React.FC<PetCardProps> = ({ petName, image }) => (
  <div className="flex items-center gap-6 border p-3 rounded-lg">
    <div className="w-24 h-24 rounded-full overflow-hidden">
      <img src={image} alt={petName} className="object-cover -top-8" />
    </div>
    <div className="flex flex-col gap-3">
      <h2 className="flex font-semibold text-xl">{petName}</h2>
      <div className="flex space-x-6 mt-2">
        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
          <i className="fa-solid fa-right-to-bracket"></i>
          <span>View Profile</span>
        </button>
        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center space-x-2">
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Edit Profile</span>
        </button>
        <button className="text-sm text-gray-500 hover:text-red-700 flex items-center space-x-2">
          <i className="fa-solid fa-trash"></i>
          <span>Delete Profile</span>
        </button>
      </div>
    </div>
  </div>
)

export default PetCard
