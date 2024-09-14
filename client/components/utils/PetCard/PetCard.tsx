// PetCard component
const PetCard = ({ petName, image }) => (
  <div className="flex items-center border p-4 rounded-lg space-x-4">
    <img
      src={image}
      alt={petName}
      className="w-20 h-20 object-cover rounded-lg"
    />
    <div className="flex-1">
      <p className="  flex font-semibold">{petName}</p>
      <div className=" flex space-x-4 mt-2">
        <button className="text-sm text-blue-500">Edit Profile</button>
        <button className="text-sm text-red-500">Delete Profile</button>
      </div>
    </div>
  </div>
)

export default PetCard
