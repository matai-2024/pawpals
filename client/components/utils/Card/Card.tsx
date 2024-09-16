// Update the CardProps interface
interface CardProps {
  title?: string // Make title optional
  children: React.ReactNode
  addAction?: () => void // Assuming addAction is a function
  buttonText?: string
  buttonIcon?: string
  icon?: string
}

// Card Component
const Card: React.FC<CardProps> = ({
  title = '',
  children,
  addAction,
  buttonText,
  buttonIcon,
  icon,
}) => (
  <div className="first-of-type:pt-0 py-10 px-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <div className="inline-flex items-center">
        <i className={`fa-solid fa-${icon} text-2xl pr-4`}></i>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {addAction && (
        <button
          className="text-blue-500 hover:text-blue-600 text-sm"
          onClick={addAction} // Trigger the addAction function
        >
          <i className={`fa-solid fa-${buttonIcon} text-xl pr-3`}></i>
          {buttonText} {/* This will be the label for the button */}
        </button>
      )}
    </div>
    {children}
  </div>
)
export default Card
