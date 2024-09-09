import { FormWrapperProps } from '../../../models/forms'

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="sm:col-span-full font-semibold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {children}
    </>
  )
}
