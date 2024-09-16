// PetCard.tsx

interface PetCardProps {
  petName: string
  image: string
}

const PetCard: React.FC<PetCardProps> = ({ petName, image }) => (
  <div className="flex items-center border p-4 rounded-lg space-x-4">
    <img
      src={image}
      alt={petName}
      className="w-20 h-20 object-cover rounded-lg"
    />
    <div className="flex-1">
      <p className="flex font-semibold">{petName}</p>
      <div className="flex space-x-4 mt-2">
        <button className="text-sm text-blue-500 flex items-center space-x-2">
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Edit Profile</span>
        </button>
        <button className="text-sm text-red-500">
          <i className="fa-solid fa-trash"></i>
          <span>Delete Profile</span>
        </button>
      </div>
    </div>
  </div>
)

export default PetCard
