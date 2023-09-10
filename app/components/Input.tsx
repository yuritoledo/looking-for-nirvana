import clsx from "clsx"
import { InputHTMLAttributes, Ref, RefObject, forwardRef } from "react"
import { ErrorMessage } from "../types/ErrorMessage"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: ErrorMessage
}

export const Input = forwardRef<any, Props>((props, ref) => {
  const { errorMessage, ...rest } = props

  const className = clsx("border border-gray-300 rounded-md p-4 w-full", {
    "border-red-500": errorMessage,
    "mb-10": !errorMessage,
  })

  return (
    <div>
      <input className={className} {...rest} ref={ref} />
      {errorMessage && <p className="text-red-500 pb-4">{errorMessage}</p>}
    </div>
  )
})
