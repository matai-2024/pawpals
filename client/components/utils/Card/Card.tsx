// Card Component
const Card = ({ title, children, addAction }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {addAction && (
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          {addAction}
        </button>
      )}
    </div>
    {children}
  </div>
)
export default Card
