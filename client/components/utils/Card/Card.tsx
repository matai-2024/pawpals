import { Link } from 'react-router-dom'

// Update the CardProps interface
interface CardProps {
  title?: string // Make title optional
  id?: string
  children: React.ReactNode
  buttonPath: string
  buttonText?: string
  buttonIcon?: string
  icon?: string
}

// Card Component
const Card: React.FC<CardProps> = ({
  title = '',
  id,
  children,
  buttonPath,
  buttonText,
  buttonIcon,
  icon,
}) => (
  <div className="first-of-type:pt-0 py-10 w-full">
    <div className="flex justify-between items-center mb-4">
      <div id={id} className="inline-flex items-center">
        <i className={`fa-solid fa-${icon} text-2xl pr-4`}></i>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <Link to={buttonPath}>
        <button className="text-blue-800 hover:text-blue-700 text-sm">
          <i className={`fa-solid fa-${buttonIcon} text-xl pr-3`}></i>
          {buttonText} {/* This will be the label for the button */}
        </button>
      </Link>
    </div>
    {children}
  </div>
)
export default Card
