// Update the CardProps interface
interface CardProps {
  title?: string // Make title optional
  children: React.ReactNode
  addAction?: () => void // Assuming addAction is a function
  buttonText?: string
}

// Card Component
const Card: React.FC<CardProps> = ({
  title = '',
  children,
  addAction,
  buttonText,
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {addAction && (
        <button
          className="text-blue-500 hover:text-blue-600 text-sm"
          onClick={addAction} // Trigger the addAction function
        >
          {buttonText} {/* This will be the label for the button */}
        </button>
      )}
    </div>
    {children}
  </div>
)
export default Card
