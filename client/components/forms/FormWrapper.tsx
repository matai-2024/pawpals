import { FormWrapperProps } from '../../../models/forms'

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div className="sm:col-span-full">
      <h2 className="font-semibold tracking-tight text-gray-900 sm:text-3xl mb-6">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  )
}
